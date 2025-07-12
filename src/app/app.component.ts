import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, HostBinding, HostListener, inject, OnInit, PLATFORM_ID, DOCUMENT } from '@angular/core';
import {  Router, RouterOutlet } from '@angular/router';
import { ContactBtnComponent } from '@shared/contact-btn/contact-btn.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { HeaderComponent } from '@shared/header/header.component';
import { UpScrollComponent } from '@shared/up-scroll/up-scroll.component';
import { ThemesService } from '@shared/services/themes.service';
import * as AOS from 'aos';
//  import { GoogleTagManagerModule, GoogleTagManagerService } from 'angular-google-tag-manager';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, UpScrollComponent, HeaderComponent, ContactBtnComponent, FooterComponent]
})
export class AppComponent  implements OnInit{
  title = 'recarga5g.com';

  showBtnScroll: boolean = false;
  private scrollHeight = 700;

  @HostBinding('class') componetCssClass: any;

  private readonly document = inject(DOCUMENT);
  private readonly platform_id = inject(PLATFORM_ID);
  private readonly router = inject(Router);
 private readonly themeService = inject(ThemesService);

  // private gtmService: GoogleTagManagerService,
  
constructor() {
}

ngOnInit(): void {
  this.themeService.initTheme();
  
  if (isPlatformBrowser(this.platform_id)) {
     AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    anchorPlacement: 'ccenter-bottom', // defines which position of the element regarding to window should trigger the animation

  });

  }



  // Esto aplicará el tema basado en el sistema o configuración guardada.

  // this.router.events.forEach(home => {
  //   if (home instanceof NavigationEnd) {
  //     const gtmTag = {
  //       event: 'Page',
  //       pageName: home.url
  //     };
  //     this.gtmService.pushTag(gtmTag);
  //   }


  // })
}  

  @HostListener('window:scroll')
  ScrollTop():void {
   if(isPlatformBrowser (this.platform_id)) {
     const yoffSet = window.scrollY;
     const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
     this.showBtnScroll = (yoffSet || scrollTop) > this.scrollHeight;
 }
}


  onScrollTop():void {
    if(isPlatformBrowser (this.platform_id)) {
      this.document.documentElement.scrollTop = 0;
    }
  }


}
