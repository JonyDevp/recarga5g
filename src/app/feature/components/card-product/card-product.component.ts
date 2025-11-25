import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card-product',
  imports: [RouterLink],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardProductComponent { }
