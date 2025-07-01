import { Component } from '@angular/core';
import { Sidenavigation } from "../sidenavigation/sidenavigation";
import { Products } from "../../products/products";
import { ProductsStoreItem } from '../../products/services/products.storeItem';

@Component({
  selector: 'app-products-gallery',
  imports: [Sidenavigation, Products],
  templateUrl: './products-gallery.html',
  styleUrl: './products-gallery.css'
})
export class ProductsGallery {
  constructor(private productsStoreItem: ProductsStoreItem) {}

  onSelectSubCategory(subCategoryId: number): void {
    this.productsStoreItem.loadProducts({ subcategoryid: subCategoryId });
  }
}
