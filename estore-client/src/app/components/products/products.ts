import { Component } from '@angular/core';
import { ProductsService } from './services/products';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';
import { Product } from './types/products.type';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings],
  templateUrl: './products.html',
  styleUrl: './products.css',
  providers: [ProductsService],
})
export class Products {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
