import { inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GetSafeSvgService {

  private readonly sanitizer = inject(DomSanitizer);

  getSafeSvg(svgCode: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svgCode);
  }
}
