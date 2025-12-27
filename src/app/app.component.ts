import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {  NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { ContactBtnComponent } from '@shared/contact-btn/contact-btn.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { UpScrollComponent } from '@shared/up-scroll/up-scroll.component';
import { ThemesService } from '@shared/services/themes.service';
import { filter } from 'rxjs';
// import * as AOS from 'aos';
//  import { GoogleTagManagerModule, GoogleTagManagerService } from 'angular-google-tag-manager';

declare var dataLayer: any; // Declaramos dataLayer global

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, UpScrollComponent, HeaderComponent, ContactBtnComponent, FooterComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  implements OnInit{
  title = 'recarga5g.com';

  showBtnScroll: boolean = false;

  private readonly router = inject(Router);
 private readonly themeService = inject(ThemesService);

   platformID = inject(PLATFORM_ID);

  // private gtmService: GoogleTagManagerService,
  
constructor() {
}

ngOnInit(): void {
  this.themeService.initTheme();
  


  // Esto aplicará el tema basado en el sistema o configuración guardada.
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Aquí mandamos info a Google Tag Manager
        this.pushPageView(event.urlAfterRedirects);
      });

}  

  private pushPageView(url: string): void {
    if (typeof dataLayer !== 'undefined') {
      dataLayer.push({
        event: 'pageview',
        pagePath: url,
        pageTitle: document.title
      });
    }
  }

}
