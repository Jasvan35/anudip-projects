import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ProductSystem } from "../ProductSystem";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: ProductSystem[] | undefined;

  constructor(private productservice: ProductService, private router :Router) {  }
  
  ngOnInit(): void {
    this.getProduct();
  }

  private getProduct(){
    this.productservice.getProductList().subscribe(data =>{
      this.product = data ;
    });
  }

  editProduct(id: number){
    this.router.navigate(['/EditProducts/', id]);
  }

  productDetails(id: number){
    this.router.navigate(['/ProductDetails/', id]);
  }

  deleteProduct(id: number){
    this.router.navigate(['/DeleteProducts/', id]);
}
}
