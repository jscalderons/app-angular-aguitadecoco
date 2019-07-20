import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from 'src/app/pages/home/home.component';
import { CreateProductComponent } from 'src/app/pages/create-product/create-product.component';
import { CartComponent } from './pages/cart/cart.component';
import { CreatePromotionComponent } from './pages/create-promotion/create-promotion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'product/create', component: CreateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'promotion/create', component: CreatePromotionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
