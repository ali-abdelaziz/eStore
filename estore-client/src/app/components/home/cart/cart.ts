import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartStoreItem } from '../services/cart/cart.storeItem';
import { Router } from '@angular/router';
import {
  faBoxOpen,
  faShoppingCart,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  imports: [FontAwesomeModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  faTrash = faTrash;
  faBoxOpen = faBoxOpen;
  faShoppingCart = faShoppingCart;

  constructor(public cartStore: CartStoreItem, private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['home/products']);
  }
}
