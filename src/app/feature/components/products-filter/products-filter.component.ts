import {
  Component,
  OnInit,
  inject,
  input,
  output,
  signal,
} from '@angular/core';

import { ProductCarousel } from 'src/app/interfaces/product-carousel.interface';
import { ProductCarouselService } from '../product-carousel/services/product-carousel.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-btn-filter',
  template: `
    <button
      type="button"
      (click)="handlerCategory()"
      [class]="
        selectedCategory() === titleBtn()
          ? 'bg-gray-800 dark:bg-gray-800 text-gray-200'
          : 'text-slate-700 dark:text-slate-400'
      "
      class="transition-colors font-medium px-3 text-sm rounded-lg whitespace-nowrap flex flex-1 gap-[0.625rem] items-center h-8"
    >
      <span>{{ titleBtn() }}</span>
      <ng-content select="[btnIcon]"></ng-content>
    </button>
  `,
  imports: [],
})
export class BtnFilterComponent {
  titleBtn = input.required<Category>();
  selectedCategory = input<Category>('Todos');
  classBtn = input<string>();
  filterCategory = output<string>();

  handlerCategory(): void {
    this.filterCategory.emit(this.titleBtn());
  }
}


@Component({
  selector: 'app-filter-products',
  templateUrl: 'products-filter.component.html',
  styles: [``],
  imports: [BtnFilterComponent, RouterLink],

})
export class ProductsFilterComponent implements OnInit {
  private readonly productCarouselService = inject(ProductCarouselService);

  allProducts = signal<ProductCarousel[]>([]);
  categories = signal<Category>('Todos');
  rippleColor = signal('rgba(255, 255, 255, 0.5)');
  selectedCategory = signal<Category>('Todos');

  setCategory(category: Category) {
    this.selectedCategory.set(category);
  }

  ngOnInit(): void {
    this.allProducts.set(this.productCarouselService.getAllProducts());
  }
}

type Category = 'Todos' | 'Recargas' | 'Servicios' | 'Pines' | 'Terminales';
