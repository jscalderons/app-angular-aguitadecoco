import { Component, Input } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Product, CartItem } from 'src/app/classes';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cart: ShopService) { }

  addItemToCart(product: Product) {
    this.cart.add(product);
  }

  findItem(productId: number): CartItem {
    return this.cart.find(productId);
  }

  plus(item: CartItem) {
    item.quantity++;
  }

  minus(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.cart.remove(item.product.id);
    }
  }
}
