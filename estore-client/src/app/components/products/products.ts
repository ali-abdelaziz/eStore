import { Component } from '@angular/core';
import { ProductsService } from './services/products';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';
import { Product } from './types/products.type';
import { ProductsStoreItem } from './services/products.storeItem';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {

  constructor(public productsStoreItem: ProductsStoreItem) {
  }
}
