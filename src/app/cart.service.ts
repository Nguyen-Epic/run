import { Product } from 'src/app/product';
import { Injectable } from '@angular/core';
import { Cart } from './cart';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private prod: ProductsService) { }
private cartList: Cart [] = []
getCartAll() {
return this.cartList
}
addCart(frmProduct: any, quantity: number) {
  const itemCart = this.cartList.find(item =>item.id==frmProduct.productId)
  if(itemCart){
    itemCart.quantity! +=quantity
  }
  else{
    this.cartList.push({
      id : frmProduct.productId,
      name: frmProduct.productName,
      price: frmProduct.price,
      quantity: quantity,
      imageUrl: frmProduct.imageUrl
    })
  }
  const product = this.prod.getProductAll().find(item =>item.productId == frmProduct.productId)
  if (product){
    product.stock -= quantity
  }
  console.log(this.cartList)
}
RemoveCart(index: number) {
  const itemRe = this.cartList[index]
    if (itemRe){
      const product = this.prod.getProductAll().find((item) => item.productId == itemRe.id);

    if (product) {
      product.stock += itemRe.quantity! ;
    }
    this.cartList.splice(index, 1);
  }
  console.log(this.cartList)
}
DeleteAllCart() {
  this.cartList.forEach((cartItem) => {
    const product = this.prod.getProductAll().find((item) => item.productId == cartItem.id);
    if (product) {
      product.stock += cartItem.quantity!;
    }
  });
  this.cartList.splice(0)
  console.log(this.cartList)
}
}
