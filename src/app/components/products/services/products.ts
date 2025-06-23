import { Injectable } from '@angular/core';
import { products } from '../sampleData/products.data';
import { ProductListItem } from '../types/products.type';

@Injectable()
export class ProductsService {

  constructor() { }

  getProductsList(): ProductListItem[] {
    return products;
  }
}
