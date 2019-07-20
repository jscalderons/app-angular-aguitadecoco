import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, Promotion } from 'src/app/classes';

const { api_url } = environment;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getListOfProducts() {
    return this.http.get(`${api_url}/products`);
  }

  createProduct(product: Product) {
    return this.http.post(`${api_url}/product`, product);
  }

  createPromotion(promotion: Promotion) {
    return this.http.post(`${api_url}/promotion`, promotion);
  }
}
