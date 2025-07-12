import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CardProductComponent } from '@feature/components/card-product/card-product.component';
import { DoubtsComponent } from '@feature/components/doubts/doubts.component';
import { RegisterStepsComponent } from '@feature/components/register-steps/register-steps.component';
import { ThemesService } from '@shared/services/themes.service';

@Component({
  selector: 'app-terminales',
  imports: [
    CardProductComponent,
    DoubtsComponent
],
  templateUrl: 'terminales.component.html',
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TerminalesComponent { 

      theme = inject(ThemesService);
      isDarkTheme = computed(() => this.theme.themeChange());
  

}
