import { Component } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  isCheckout = false;

  constructor(private shop: ShopService) { }

  getCart() {
    return this.shop.cart;
  }

  getTotal() {
    const { cart } = this.shop;
    if (cart.length > 0) {
      const totals = cart.map(item => (item.product.price * item.quantity));
      const total = totals.reduce((previous, current) => (previous + current));

      return total;
    }

    return 0;
  }

  checkout() {
    this.isCheckout = true;
    this.shop.clean();
    setTimeout(() => {
      this.isCheckout = false;
    }, 3000);
  }
}
