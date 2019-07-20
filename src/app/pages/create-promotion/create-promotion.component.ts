import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { formatDate } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Product } from 'src/app/classes';

@Component({
  selector: 'app-create-promotion',
  templateUrl: './create-promotion.component.html',
  styleUrls: ['./create-promotion.component.scss']
})
export class CreatePromotionComponent implements OnInit {
  form: FormGroup;
  products: Product[];
  alert = {
    message: '',
    show: false
  };
  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  constructor(private api: ApiService) {
    this.form = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      discount: new FormControl(5, [
        Validators.required,
        Validators.min(5),
        Validators.max(100)
      ]),
      startedAt: new FormControl('', Validators.required),
      endedAt: new FormControl('', Validators.required),
      products: new FormControl([])
    });
  }

  ngOnInit() {
    this.api.getListOfProducts().subscribe((res: any) => {
      this.products = res.data;
    });
  }

  save() {
    this.api.createPromotion(this.form.value).subscribe((res: any) => {
      if (res.code === 201) {
        this.form.reset({
          description: '',
          discount: 5,
          startedAt: '',
          endedAt: '',
          products: []
        });
        this.showAlert('La promoción se a creado con exito.');
      }
    });
  }

  showAlert(message: string) {
    this.alert.message = message;
    this.alert.show = true;
    setTimeout(() => {
      this.alert.message = '';
      this.alert.show = false;
    }, 3000);
  }

  onCheck(state: boolean, product?: Product) {
    if (product) {
      let products = this.field('products').value;
      if (state) {
        products = products.concat(product);
      } else {
        products = products.filter((item: any) => item.id !== product.id);
      }
      this.field('products').setValue(products);
    } else {
      if (state) {
        this.field('products').setValue(this.products);
      } else {
        this.field('products').setValue([]);
      }
    }
  }

  isCheck(productId: number): boolean {
    return !!(this.field('products').value.find((product: any) => product.id === productId));
  }

  field(name: string): AbstractControl {
    return this.form.get(name);
  }

  getSubtotal(price: number): number {
    return price - (price  * (this.field('discount').value / 100));
  }
}
