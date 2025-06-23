import { Component } from '@angular/core';
import { ProductListItem } from './types/products.type';
import { ProductsService } from './services/products';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductsService]
})
export class Products {

  products: ProductListItem[] = [];

  constructor(private productsService: ProductsService) {
    this.products = this.productsService.getProductsList();
  }

}
