import { computed, effect, signal } from '@angular/core';
import { CartItem } from '../../types/cart.type';
import { Product } from '../../../products/types/products.type';

export class CartStoreItem {
  private readonly _products = signal<CartItem[]>(this.loadFromSession());

  private _saveEffect = effect(() => {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const products = this._products();
      if (products.length === 0) {
        window.sessionStorage.removeItem('cart');
      } else {
        window.sessionStorage.setItem('cart', JSON.stringify(products));
      }
    }
  });

  readonly totalAmount = computed(() => {
    return this._products().reduce((sum, item) => sum + item.amount, 0);
  });

  readonly totalProducts = computed(() => {
    return this._products().reduce((count, item) => count + item.quantity, 0);
  });

  readonly cart = computed(() => ({
    products: this._products(),
    totalAmount: this.totalAmount(),
    totalProducts: this.totalProducts(),
  }));

  addProduct(product: Product): void {
    const currentItems = this._products(); // Get the current items in the cart
    const existingIndex = currentItems.findIndex(
      (item) => item.product.id === product.id
    ); // Get the index of the existing product
    // Check if the product already exists in the cart
    // If it does not exist, add it with quantity 1 and its price as amount
    // If it exists, increment the quantity and update the amount
    // by adding the product's price to the existing amount
    if (existingIndex === -1) {
      this._products.set([
        ...currentItems,
        {
          product,
          quantity: 1,
          amount: product.price,
        },
      ]);
    } else {
      const updatedItems = [...currentItems]; // Create a copy of the current items in the cart
      const existing = updatedItems[existingIndex]; // Find the product we want to update

      updatedItems[existingIndex] = {
        ...existing, // Spread the existing item to keep its properties
        quantity: existing.quantity + 1, // Increment the quantity
        amount: existing.amount + Number(product.price), // Update the amount
      };
      this._products.set(updatedItems);
    }
  }

  decreaseProductQuantity(cartItem: CartItem): void {
    const updatedItems = this._products()
      .map((item) => {
        if (item.product.id === cartItem.product.id) {
          if (item.quantity <= 1) {
            return null; // If quantity is < 1, we will remove the item instead of decreasing it
          }
          return {
            ...item,
            quantity: item.quantity - 1, // Decrease the quantity
            amount: item.amount - Number(item.product.price), // Decrease the amount
          };
        }
        return item;
      })
      .filter(Boolean) as CartItem[]; //Remove nulls from the array

    this._products.set(updatedItems);
  }

  removeProduct(cartItem: CartItem): void {
    const updatedItems = this._products().filter(
      (item) => item.product.id !== cartItem.product.id // Filter out the item to be removed
    );
    this._products.set(updatedItems);
  }

  private loadFromSession(): CartItem[] {
    const storedProducts =
      typeof window !== 'undefined' && window.sessionStorage
        ? window.sessionStorage.getItem('cart')
        : null;
    try {
      return storedProducts ? JSON.parse(storedProducts) : [];
    } catch {
      return [];
    }
  }
}
