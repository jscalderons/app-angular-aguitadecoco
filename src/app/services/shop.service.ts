import { Injectable } from '@angular/core';
import { CartItem, Product } from 'src/app/classes';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  cart: CartItem[] = [];

  constructor() { }

  add(product: Product) {
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
  }

  remove(id: number) {
    const items = this.cart.filter(item => item.product.id !== id);

    this.cart = items;
  }

  clean() {
    this.cart = [];
  }

  find(id: number): CartItem {
    const product = this.cart.find(item => item.product.id === id);

    return product;
  }

}
