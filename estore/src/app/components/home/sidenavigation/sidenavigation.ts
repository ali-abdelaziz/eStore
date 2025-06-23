import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.css'
})
export class Sidenavigation {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getAllCategories();
  }

  getCategories(parentCategoryId?: number): Category[] {
    // fetch categories based on parentCategoryId
    return this.categories.filter(
      (category) => category.parent_category_id === parentCategoryId
    );
  }
}
