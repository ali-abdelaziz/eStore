import { Component } from '@angular/core';
import { Category } from '../types/category';
import { CategoryService } from '../services/category';
import { CategoriesStoreItem } from '../services/categories.storeItem';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  constructor(public categoryStore: CategoriesStoreItem) {}
}
