import { Component, output } from '@angular/core';
import { Category } from '../types/category';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  readonly categoryClicked = output<number>();
  constructor(public categoryStore: CategoriesStoreItem) {}

  onCategoryClick(mainCategory: Category): void {
    this.categoryClicked.emit(mainCategory.id);
  }
}
