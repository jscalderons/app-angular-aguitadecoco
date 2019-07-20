import { Component, Input } from '@angular/core';
import { Product } from 'src/app/classes';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product: Product;

  constructor(private cart: ShopService) { }

  addItemToCart(product: Product) {
    this.cart.addToCart(product);
  }
}
