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
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { CartStoreItem } from './services/cart/cart.storeItem';
import { filter } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Header, Catnavigation, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers: [
    CategoryService,
    CategoriesStoreItem,
    ProductsStoreItem,
    ProductsService,
    CartStoreItem
  ],
})
export class Home {
  constructor(
    private categoriesStoreItem: CategoriesStoreItem,
    private productsStoreItem: ProductsStoreItem,
    private router: Router
  ) {
    this.categoriesStoreItem.loadCategories();
    this.productsStoreItem.loadProducts();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      // If the user navigates to '/home', redirect to '/home/products'
      // This is to ensure that the products are loaded when the user first visits the home page
      if ((event as NavigationEnd).url === '/home') {
        this.router.navigate(['/home/products']);
      }
    });
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
