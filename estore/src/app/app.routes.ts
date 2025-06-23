import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //  Catch-all route for 404 Not Found
  // This should be the last route in the array
  // to ensure it only matches when no other routes do.
  {
    path: '**',
    component: NotFound
  }
];
