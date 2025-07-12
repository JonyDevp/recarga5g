import { computed, inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  private readonly rendererFactory2 = inject(RendererFactory2);
  private readonly renderer2: Renderer2 = this.rendererFactory2.createRenderer(null, null)
  private readonly platformId = inject(PLATFORM_ID);

  //* Nombre de la variable en el LocalStorage
  private readonly LS_THEME = 'theme';

  //* Signal para el tema actual
  #currentTheme = signal<AppTheme | undefined>(this.getStoredTheme());
  #isDarkTheme = computed(() => this.#currentTheme() === AppTheme.DARK);

  public themeChange = computed(() => this.#isDarkTheme());

  //* Inicializa el tema según el valor almacenado o la preferencia del sistema
  initTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const theme = this.#currentTheme() ?? (this.isSystemDark() ? AppTheme.DARK : AppTheme.LIGHT);
      this.applyTheme(theme);
    }
  }

  //* Cambia y guarda el tema
  updateTheme(theme: AppTheme) {
    if (isPlatformBrowser(this.platformId)) {
      this.applyTheme(theme);
      this.setStoredTheme(theme);
  
    }
  }


  //* Alterna entre temas
  toggleTheme() {
    const newTheme = this.#currentTheme() === AppTheme.DARK ? AppTheme.LIGHT : AppTheme.DARK;
    this.updateTheme(newTheme);

  }



  //* Aplica el tema y actualiza el Signal
  private applyTheme(theme: AppTheme) {
    const previousTheme = this.#currentTheme();
    if (previousTheme) {
      this.renderer2.removeClass(document.body, previousTheme);
    }
    this.renderer2.addClass(document.body, theme);
    this.#currentTheme.set(theme);
  }

  //* Guarda el tema en el LocalStorage
  private setStoredTheme(theme: AppTheme) {
    if (this.isClientRender()) {
      localStorage.setItem(this.LS_THEME, theme);
    }
  }

  //* Obtiene el tema almacenado en el LocalStorage
  private getStoredTheme(): AppTheme | undefined {
    return this.isClientRender() ? localStorage.getItem(this.LS_THEME) as AppTheme | undefined : undefined;
  }

  //* Verifica si el sistema tiene preferencia por el tema oscuro
  private isSystemDark(): boolean {
    return this.isClientRender() && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  //* Verifica si se está en un entorno de cliente
  private isClientRender(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

}


export enum AppTheme {
  LIGHT = 'light',
  DARK = 'dark'
}
