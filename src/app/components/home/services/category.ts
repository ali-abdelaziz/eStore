import { Injectable } from '@angular/core';
import { categories } from '../sampleData/categories.data';
import { Category } from '../types/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Category[] {
    return categories;
  }
}
