import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Ratings } from "../../ratings/ratings";
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products/services/products';
import { Product } from '../../products/types/products.type';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [Ratings, CurrencyPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly productsService = inject(ProductsService);
  readonly product = signal<Product | null>(null);

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? Number(idParam) : null;

    if(id !== null && !isNaN(id)) {
      this.productsService.getProduct(id)
      .pipe(takeUntilDestroyed())
      .subscribe((res) => {
        this.product.set(Array.isArray(res) ? res[0] : res); // always expect a single product
      });
      return;
    }
  }
}
