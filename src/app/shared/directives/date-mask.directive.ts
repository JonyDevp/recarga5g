import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  Renderer2,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

type Segment = 'day' | 'month' | 'year';

@Directive({
  selector: '[dateMaskDDMMYYYY]',
  standalone: true,
  host: {
    // Opcional: ayuda en móviles
    'autocomplete': 'off',
    'inputmode': 'numeric',
    'aria-label': 'Fecha en formato DD/MM/YYYY'
  }
})
export class DateMaskDirective implements ControlValueAccessor, OnInit, OnDestroy {

  // ===== Inyecciones =====
  private renderer = inject(Renderer2);
  private el = inject(ElementRef<HTMLInputElement>);
  private ngControl = inject(NgControl, { optional: true });

  // ===== Constantes de máscara =====
  private readonly MASK = 'DD/MM/YYYY';

  // ===== Estado =====
  private composing = false;
  private touchedOnce = false;
  private unlisteners: Array<() => void> = [];

  // ===== CVA =====
  private onChange: (val: string | null) => void = () => { };
  private onTouched: () => void = () => { };

  // ===== Ciclo de vida =====
  ngOnInit(): void {
    const input = this.input;

    // focus → (1) colocar máscara si vacío y seleccionar DD
    this.unlisten(this.renderer.listen(input, 'focus', () => {
      if (!input.value) {
        input.value = this.MASK;
      }
      this.selectSegment('day');
    }));

    // click → (10) seleccionar el bloque según posición
    this.unlisten(this.renderer.listen(input, 'click', () => {
      this.ensureMask();
      const pos = input.selectionStart ?? 0;
      this.selectSegment(this.segmentFromCaret(pos));
    }));

    // IME (móviles/teclados asiáticos)
    this.unlisten(this.renderer.listen(input, 'compositionstart', () => { this.composing = true; }));
    this.unlisten(this.renderer.listen(input, 'compositionend', () => { this.composing = false; }));

    // beforeinput → control fino (bloqueo de pegado “libre”/inserciones)
    this.unlisten(this.renderer.listen(input, 'beforeinput', (e: InputEvent) => {
      // Permitimos solo dígitos como insertText; el resto se trata explícitamente
      if (e.inputType?.startsWith('insertText')) {
        const data = e.data ?? '';
        if (!/^\d$/.test(data)) {
          e.preventDefault();
        }
        return;
      }

      // Pegado: normalizar a la máscara
      if (e.inputType === 'insertFromPaste') {
        e.preventDefault();
        const clipboard = (e as any).dataTransfer?.getData('text') ?? '';
        const normalized = this.normalizeExternalValue(clipboard);
        this.setValue(normalized);
        // Elegir segmento siguiente según placeholders restantes
        const seg: Segment = /Y/.test(normalized) ? 'year' : (/M/.test(normalized) ? 'month' : 'day');
        this.selectSegment(seg);
        this.emitChange();
        return;
      }

      // Borrados complejos: cancelarlos aquí; los manejamos en keydown
      if (
        e.inputType === 'deleteContentBackward' ||
        e.inputType === 'deleteContentForward' ||
        e.inputType?.startsWith('delete')
      ) {
        e.preventDefault();
        return;
      }
    }));

    // keydown → toda la lógica 2–9 y 11–14
    this.unlisten(this.renderer.listen(input, 'keydown', (e: KeyboardEvent) => {
      this.ensureMask();
      if (this.composing) return;

      const key = e.key;

      // Navegación segmentada con flechas/home/end/tab
      if (key === 'Tab') {
        // Permita Tab sin bloquear (accesibilidad)
        this.touchedOnce = true;
        return;
      }
      if (key === 'Home') {
        e.preventDefault();
        this.selectSegment('day');
        return;
      }
      if (key === 'End') {
        e.preventDefault();
        this.selectSegment('year');
        return;
      }
      if (key === 'ArrowLeft' || key === 'ArrowRight') {
        e.preventDefault();
        const seg = this.currentSegment();
        if (key === 'ArrowLeft') {
          this.selectSegment(seg === 'year' ? 'month' : 'day');
        } else {
          this.selectSegment(seg === 'day' ? 'month' : 'year');
        }
        return;
      }

      // (11–14) Borrado segmentado: repone placeholders y re-selecciona
      if (key === 'Backspace' || key === 'Delete') {
        e.preventDefault();
        const seg = this.currentSegment();
        if (seg === 'day') this.setSegmentText('day', 'DD');
        if (seg === 'month') this.setSegmentText('month', 'MM');
        if (seg === 'year') this.setSegmentText('year', 'YYYY');
        this.selectSegment(seg);
        this.emitChange();
        return;
      }

      // Solo dígitos del 0–9
      if (!/^\d$/.test(key)) {
        e.preventDefault();
        return;
      }

      // Entrada por segmento
      e.preventDefault();
      const seg = this.currentSegment();
      if (seg === 'day') {
        this.handleDayInput(key);
      } else if (seg === 'month') {
        this.handleMonthInput(key);
      } else {
        this.handleYearInput(key);
      }
      this.emitChange();
    }));

    // blur → (9) validar fecha completa y marcar error nativo
    this.unlisten(this.renderer.listen(input, 'blur', () => {
      this.touchedOnce = true;
      this.onTouched();
      const v = this.getValue();
      // Si aún hay placeholders, no marcamos inválido en nativo
      if (/[DMY]/.test(v)) {
        input.setCustomValidity('');
        return;
      }
      input.setCustomValidity(this.isValidDate(v) ? '' : 'Fecha inválida');
    }));
  }

  ngOnDestroy(): void {
    this.unlisteners.forEach(fn => fn());
    this.unlisteners = [];
  }

  // ===== Utilidad para limpiar listeners =====
  private unlisten(fn: () => void) {
    this.unlisteners.push(fn);
  }

  // ====== CVA ======
  writeValue(value: string | null): void {
    const v = (value ?? '').trim();
    const normalized = this.normalizeExternalValue(v);
    this.setValue(normalized);
  }
  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouched = fn; }

  // ===== Getters/Setters de valor/elemento =====
  private get input(): HTMLInputElement {
    return this.el.nativeElement;
  }
  private setValue(v: string) { this.input.value = v; }
  private getValue(): string { return this.input.value || ''; }

  // ===== Máscara y selección =====
  private ensureMask(): void {
    if (!this.getValue()) this.setValue(this.MASK);
  }
  private segmentFromCaret(pos: number): Segment {
    if (pos <= 2) return 'day';
    if (pos <= 5) return 'month';
    return 'year';
  }
  private selectSegment(seg: Segment) {
    if (seg === 'day') this.input.setSelectionRange(0, 2);
    else if (seg === 'month') this.input.setSelectionRange(3, 5);
    else this.input.setSelectionRange(6, 10);
  }
  private currentSegment(): Segment {
    const pos = this.input.selectionStart ?? 0;
    return this.segmentFromCaret(pos);
  }
  private getSegmentText(seg: Segment, v = this.getValue()): string {
    if (seg === 'day') return v.slice(0, 2);
    if (seg === 'month') return v.slice(3, 5);
    return v.slice(6, 10);
  }
  private setSegmentText(seg: Segment, text: string) {
    let v = this.getValue();
    if (seg === 'day') {
      v = `${text}/${v.slice(3)}`;
    } else if (seg === 'month') {
      v = `${v.slice(0, 3)}${text}/${v.slice(6)}`;
    } else {
      v = `${v.slice(0, 6)}${text}`;
    }
    this.setValue(v);
  }

  // ===== Normalización / Emisión =====
  private sanitizeToMaskChars(v: string): string {
    // Conservar solo dígitos → reconstruir DD/MM/YYYY
    const digits = v.replace(/\D/g, '').slice(0, 8); // 2+2+4
    const d = digits.slice(0, 2).padEnd(2, 'D');
    const m = digits.slice(2, 4).padEnd(2, 'M');
    const y = digits.slice(4, 8).padEnd(4, 'Y');
    return `${d}/${m}/${y}`;
  }
  private normalizeExternalValue(v: string): string {
    if (!v) return this.MASK;
    if (!v.includes('/')) return this.sanitizeToMaskChars(v);
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v);
    return m ? v : this.MASK;
  }
  private emitChange() {
    const val = this.getValue();
    // Puede emitir el texto tal cual; si prefiere null cuando hay placeholders, cámbielo:
    // const out = /[DMY]/.test(val) ? null : val;
    const out = val;
    this.onChange(out);
  }

  // ===== Lógica por segmento =====

  // (2–4) Día
  private handleDayInput(d: string) {
    const curr = this.getSegmentText('day'); // "DD", "1D", "09", etc.

    if (curr === 'DD') {
      const n = Number(d);
      if (n >= 0 && n <= 3) {
        // (2) primer dígito 0–3 → reemplazar primera D, esperar segundo
        this.setSegmentText('day', `${d}D`);
        this.input.setSelectionRange(1, 2); // apunta a la segunda D
      } else {
        // (4) si 4–9 → "0" + d y pasar a MM
        this.setSegmentText('day', `0${d}`);
        this.selectSegment('month');
      }
      return;
    }

    // (3) completar segundo dígito 1–9 → pasar a MM
    if (/^\dD$/.test(curr)) {
      if (/[1-9]/.test(d)) {
        this.setSegmentText('day', curr[0] + d);
        this.selectSegment('month');
      }
      return;
    }

    // Si estaba lleno, reiniciar como si comenzara de nuevo
    this.setSegmentText('day', `${d}D`);
    this.input.setSelectionRange(1, 2);
  }

  // (5–6) Mes
  // - Si primer dígito = 0 ó 1 → se espera segundo dígito (1–9) y luego pasa a YYYY.
  // - Si primer dígito = 2–9 → escribir "0" + dígito y pasar directo a YYYY.
  private handleMonthInput(d: string) {
    const curr = this.getSegmentText('month'); // "MM", "1M", "03", etc.

    if (curr === 'MM') {
      // Primer dígito del mes
      if (d === '0' || d === '1') {
        // Regla original (5): primera M ∈ {0,1}
        this.setSegmentText('month', `${d}M`);
        this.input.setSelectionRange(4, 5); // segunda M
      } else if (/[2-9]/.test(d)) {
        // NUEVA regla: 2–9 ⇒ "0" + d y pasar a año
        this.setSegmentText('month', `0${d}`);
        this.selectSegment('year'); // (7) Seleccionar ahora YYYY
      }
      return;
    }

    // Segunda posición del mes (cuando quedó "0M" o "1M")
    if (/^[01]M$/.test(curr)) {
      // Regla original (6): segunda M ∈ {1–9}
      if (/[1-9]/.test(d)) {
        this.setSegmentText('month', curr[0] + d);
        this.selectSegment('year'); // (7) Seleccionar ahora YYYY
      }
      return;
    }

    // Si ya estaba lleno ("MM" completo), reiniciar con la regla de primer dígito
    if (d === '0' || d === '1') {
      this.setSegmentText('month', `${d}M`);
      this.input.setSelectionRange(4, 5);
    } else if (/[2-9]/.test(d)) {
      this.setSegmentText('month', `0${d}`);
      this.selectSegment('year');
    }
  }

  // (8) Año: reemplaza secuencialmente cada Y
  private handleYearInput(d: string) {
    const curr = this.getSegmentText('year'); // "YYYY", "2YYY", etc.

    if (curr.includes('Y')) {
      const chars = curr.split('');
      const idx = chars.indexOf('Y');
      chars[idx] = d;
      const next = chars.join('');
      this.setSegmentText('year', next);

      const nextIdx = next.indexOf('Y');
      if (nextIdx === -1) {
        // Año completo → dejar caret al final
        this.input.setSelectionRange(10, 10);
      } else {
        this.input.setSelectionRange(6 + nextIdx, 6 + nextIdx + 1);
      }
      return;
    }

    // Si ya estaba completo, reiniciar
    this.setSegmentText('year', d + 'YYY');
    this.input.setSelectionRange(7, 8);
  }

  // ===== Validación de fecha completa (9) =====
  private isValidDate(v: string): boolean {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(v);
    if (!m) return false;
    const dd = +m[1], mm = +m[2], yyyy = +m[3];

    if (mm < 1 || mm > 12) return false;
    if (dd < 1) return false;

    const isLeap = (yyyy % 4 === 0 && yyyy % 100 !== 0) || (yyyy % 400 === 0);
    const dim = [31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][mm - 1];

    return dd <= dim;
  }
}
