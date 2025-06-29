import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Catnavigation } from "./catnavigation/catnavigation";
import { Sidenavigation } from "./sidenavigation/sidenavigation";
import { Products } from "../products/products";
import { CategoryService } from './services/category';
import { CategoriesStoreItem } from './services/categories.storeItem';

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, Sidenavigation, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [CategoryService, CategoriesStoreItem],
})
export class Home {
  constructor(private categoriesStoreItem: CategoriesStoreItem) {
    this.categoriesStoreItem.loadCategories();
   }
}
