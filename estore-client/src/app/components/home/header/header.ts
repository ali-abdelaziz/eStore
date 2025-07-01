import { Component, output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import { SearchKeyword } from '../types/searchKeyword.type';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  faSearch = faSearch;
  faUserCircle = faUserCircle;
  faShoppingCart = faShoppingCart;

  readonly searchClicked = output<SearchKeyword>();

  constructor(public categoryStore: CategoriesStoreItem) {}

  onClickSearch(keyword: string, categoryId: string): void {
    this.searchClicked.emit({
      categoryId: parseInt(categoryId),
      keyword: keyword
    });
  }
}
