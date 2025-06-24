import { Component } from '@angular/core';
import { Category } from '../types/category';
import { CategoryService } from '../services/category';

@Component({
  selector: 'app-catnavigation',
  imports: [],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe((categories) => {
      // Filter categories to only include top-level categories (return only categories where parent_category_id is null)
      this.categories = categories.filter(
        (category) => category.parent_category_id === null
      );
      console.log('Categories:', this.categories);
    });
  }
}
