import { Component } from '@angular/core';
import { Header } from './header/header';
import { Catnavigation } from './catnavigation/catnavigation';
import { Sidenavigation } from './sidenavigation/sidenavigation';
import { Products } from '../products/products';
import { CategoriesStoreItem } from './services/category/categories.storeItem';
import { CategoryService } from './services/category/category';
import { ProductsStoreItem } from '../products/services/products.storeItem';
import { ProductsService } from '../products/services/products';
import { SearchKeyword } from './types/searchKeyword.type';

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, Sidenavigation, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsStoreItem,
    ProductsService,
  ],
})
export class Home {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
  }

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }

  onSelectCategory(mainCategoryId: number): void {
    this.productsStoreItem.loadProducts({ maincategoryid: mainCategoryId });
  }

  onSearchKeyword(searchKeyword: SearchKeyword): void {
    this.productsStoreItem.loadProducts({
      maincategoryid: searchKeyword.categoryId,
      keyword: searchKeyword.keyword
    });
  }
}
