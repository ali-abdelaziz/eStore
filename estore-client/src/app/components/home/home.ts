import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Catnavigation } from "./catnavigation/catnavigation";
import { Sidenavigation } from "./sidenavigation/sidenavigation";
import { Products } from "../products/products";
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { CategoryService } from './services/category/category';
import { ProductsStoreItem } from '../products/services/products.storeItem';
import { ProductsService } from '../products/services/products';


@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, Sidenavigation, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [CategoryService, CategoriesStoreItem, ProductsStoreItem, ProductsService],
})
export class Home {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }
}
