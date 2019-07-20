import { Injectable } from '@angular/core';
import { CartItem, Product } from 'src/app/classes';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart: CartItem[] = [];

  constructor() { }

  addToCart(product: Product) {
    if (this.cart.length > 0) {
      const findProduct = this.cart.find(
        (item: CartItem) => item.product.id === product.id
      );
      if (findProduct) {
        findProduct.quantity++;
      } else {
        this.cart.push({ product, quantity: 1 });
      }
    } else {
      this.cart.push({ product, quantity: 1 });
    }

    console.log(this.cart);
  }
}
