import { Component } from '@angular/core';
import { ProductsService } from './services/products';
import { CommonModule } from '@angular/common';
import { Ratings } from '../ratings/ratings';
import { Product } from './types/products.type';
import { ProductsStoreItem } from './services/products.storeItem';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, Ratings, FontAwesomeModule, RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  faBoxOpen = faBoxOpen;
  constructor(public productsStoreItem: ProductsStoreItem) {
  }
}
