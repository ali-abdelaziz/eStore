import { Component, output, signal } from '@angular/core';
import { Category } from '../types/category';
import { CategoriesStoreItem } from '../services/category/categories.storeItem';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-catnavigation',
  imports: [RouterLink],
  templateUrl: './catnavigation.html',
  styleUrl: './catnavigation.css',
})
export class Catnavigation {
  readonly categoryClicked = output<number>();
  displayOptions = signal(true);

  constructor(public categoryStore: CategoriesStoreItem, private router: Router) {
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd)
    )
    .subscribe((event: NavigationEnd) => {
      this.displayOptions.set(event.url === '/home/products');
    })
  }

  onCategoryClick(mainCategory: Category): void {
    this.categoryClicked.emit(mainCategory.id);
  }
}
