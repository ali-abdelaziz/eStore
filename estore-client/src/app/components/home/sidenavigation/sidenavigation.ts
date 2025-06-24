import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Category } from '../types/category';
import { CategoryService } from '../services/category';

@Component({
  selector: 'app-sidenavigation',
  imports: [FontAwesomeModule],
  templateUrl: './sidenavigation.html',
  styleUrl: './sidenavigation.css',
})
export class Sidenavigation {
  faAngleDown = faAngleDown;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      // console.log('Categories:', this.categories);
    });
  }

  getCategories(parentCategoryId?: number): Category[] {
    // fetch categories based on parentCategoryId
    return this.categories.filter((category) =>
      parentCategoryId
        ? category.parent_category_id === parentCategoryId
        : category.parent_category_id === null
    );
  }
}
