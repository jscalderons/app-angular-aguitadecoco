import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ShopService } from 'src/app/services/shop.service';
import { Product } from 'src/app/classes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filtered: Product[] = [];
  searching = false;


  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getListOfProducts().subscribe((res: any) => {
      this.products = this.products.concat(res.data);
    });
  }

  isValid() {
    if (this.searching) {
      return this.filtered.length >= 0;
    } else {
      return this.products.length >= 0;
    }
  }

  onSearchProducts(query: string) {
    if (query.length >= 3) {
      const products = this.products.filter((product: Product) => {
        return (
          product.title.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
        );
      });
      this.filtered = products;
      this.searching = true;
    } else {
      this.filtered = null;
      this.searching = false;
    }
  }
}
