import { Component } from '@angular/core';
import { ProductListItem } from './types/products.type';
import { ProductsService } from './services/products';
import { CommonModule } from '@angular/common';
import { Ratings } from "../ratings/ratings";

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings],
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
