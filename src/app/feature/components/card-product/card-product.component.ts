import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-product',
  imports: [],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent { }
