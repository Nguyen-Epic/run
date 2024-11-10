import { Product } from './../product';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "../product-list/product-list.component";
import { ProductsService } from '../products.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, ProductListComponent, RouterModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searching: string = '';
  filterProductList: Product[]=[]
  products : Product[] =[]
  constructor ( private prod : ProductsService){
    this.products=prod.getProductAll();
    this.filterProductList=this.products
  }

  filterResults() {
    if(!this.searching){
      this.filterProductList =this.products
    }
    this.filterProductList= this.products.filter(item=>
      item.productName.toLowerCase().includes(this.searching.toLowerCase())
    )
  }
}
