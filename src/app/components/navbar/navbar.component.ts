import { Component } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private shop: ShopService) { }

  getQuantityCartItems() {
    return this.shop.cart.length;
  }
}
