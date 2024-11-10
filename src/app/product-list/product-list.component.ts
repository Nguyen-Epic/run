import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { StarComponent } from "../produc-list/star/star.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '../products.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [StarComponent, ReactiveFormsModule, HeaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
   productList: Product[] = [];
  formProduct = new FormGroup({
    productId: new FormControl<number>(1),
    productName: new FormControl<string>(''),
    productCode: new FormControl<string>(''),
    releaseDate: new FormControl<string>(''),
    price: new FormControl<number>(0),
    stock: new FormControl<number>(0),
    description: new FormControl<string>(''),
    starRating: new FormControl<number>(5),
    imageUrl: new FormControl<string>(''),
  });
  constructor(private prod: ProductsService) {
    this.productList=this.prod.getProductAll()
  }
  file: string = '';
  IsAdd: number = 1;
  IsUpdate: number = 0;
  ShowRating(value: any) {
    alert(`${value}`);
  }
  onChange(event: any) {
    const fileImage = event.target.files?.[0].name;
    this.file = 'images/' + fileImage;
    this.formProduct.controls['imageUrl'].setValue(this.file);
  }
  Add() {
    this.prod.AddProduct(this.formProduct);
  }

  Edit(index: number) {
    this.formProduct.setValue(this.prod.EditProduct(index));
    this.file = this.formProduct.controls.imageUrl.value ?? '';
  }
  id: any
  Update() {
    this.prod.UpdateProduct(this.id, this.formProduct);
  }
  Delete(index: number) {
    if (confirm('Bạn có muốn xóa sản phẩm này không?')) {
      this.prod.DeleteProduct(index);
    }
  }
}
