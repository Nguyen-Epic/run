import { Cart } from './../cart';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  productDetail: Product | undefined;
  cartList: Cart[] = [];
  constructor(private prod: ProductsService, private router: ActivatedRoute, private cartservice: CartService) {
    this.cartList = cartservice.getCartAll()
  }
  ngOnInit(): void {
    let id = Number(this.router.snapshot.params['id']);
    console.log(id)
    this.productDetail = this.prod.getProductId(id);
  }
  Add() {
    this.cartservice.addCart(this.productDetail,1)
  }
  ItemCount() {
    let sum =0
    this.cartList.forEach(item=>{
      sum+= item.quantity!
    })
    return sum
  }
  ItemSum() {
   let sum = 0;
   this.cartList.forEach((item) => {
     sum += item.quantity! * item.price!
   });
   return sum;
  }
  Remove(index: number) {
    this.cartservice.RemoveCart(index)
  }
  DeleteAll(){
     this.cartservice.DeleteAllCart();
     console.log(this.cartservice.getCartAll());
    if (confirm('Bạn có muốn xóa sản phẩm này không?')){
      this.cartservice.DeleteAllCart()
    }

  }
}
