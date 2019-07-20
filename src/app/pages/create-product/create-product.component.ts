import { Component } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent {
  alert = {
    message: '',
    show: false
  };
  form: FormGroup;

  constructor(private api: ApiService) {
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1)
      ]),
    });
  }

  save() {
    this.api.createProduct(this.form.value).subscribe((res: any) => {
      if (res.code === 201) {
        this.showAlert('El producto se a creado con exito.');
        this.form.reset();
      }
    });
  }

  showAlert(message: string) {
    this.alert.message = message;
    this.alert.show = true;
    setTimeout(() => {
      this.alert.message = '';
      this.alert.show = false;
    }, 5000);
  }

  field(name: string): AbstractControl {
    return this.form.get(name);
  }
}
