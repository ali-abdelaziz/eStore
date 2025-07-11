import { Routes } from '@angular/router';
import { NotFound } from './components/not-found/not-found';
import { ProductsGallery } from './components/home/products-gallery/products-gallery';
import { ProductDetails } from './components/home/product-details/product-details';
import { Cart } from './components/home/cart/cart';
import { UserSignup } from './components/home/user/user-signup/user-signup';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    children: [
      {
        path: 'products',
        component: ProductsGallery,
      },
      {
        path: 'product/:id',
        component: ProductDetails,
      },
      {
        path: 'cart',
        component: Cart,
      },
      {
        path: 'signup',
        component: UserSignup,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home/products',
    pathMatch: 'full',
  },
  //  Catch-all route for 404 Not Found
  // This should be the last route in the array
  // to ensure it only matches when no other routes do.
  {
    path: '**',
    component: NotFound,
  },
];
