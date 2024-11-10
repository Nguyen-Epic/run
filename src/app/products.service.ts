import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  [x: string]: any;
  protected productList: Product[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      stock: 15,
      starRating: 4.2,
      imageUrl: './assets/images/garden-cart.png',
    },
    {
      productId: 3,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      stock: 20,
      starRating: 4.8,
      imageUrl: './assets/images/rejon-Hammer.png',
    },
    {
      productId: 4,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      stock: 25,
      starRating: 3.7,
      imageUrl: './assets/images/egore911-saw.png',
    },
    {
      productId: 5,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      stock: 30,
      starRating: 4.6,
      imageUrl: './assets/images/xbox-controller.png',
    },
  ];
  constructor() {}
  getProductAll(): Product[] {
    return this.productList;
  }
  getProductId(index: number): Product | undefined {
    return this.productList.find((item) => (item.productId == index));
  }
  AutoId(){
    let max = 0
    this.productList.forEach(item =>{
      if (item.productId > max)
        max = item.productId
    })
    return max + 1
  }
  AddProduct(form: any) {
    this.productList.push(form.value);
    console.log(this.productList);
  }
  EditProduct(index: number) {
    return this.productList[index];
  }
  UpdateProduct(index: number, frmProduct: any) {
    this.productList[index] = frmProduct.value
  }
  DeleteProduct(index:number){
    this.productList.splice(index, 1);

  }
}
