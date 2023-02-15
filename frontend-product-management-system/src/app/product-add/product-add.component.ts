import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductSystem } from '../ProductSystem';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit {

  productadd: ProductSystem = new ProductSystem();
  submitted!: boolean;
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void { }


  saveProduct(): void {
    this.productService.addProduct(this.productadd).subscribe(data => {
      console.log(data);
      this.goToProductList();
    }, error => console.error(error));
  }
      

  goToProductList() {
    this.router.navigate(['/Products']);
  }

  onSubmit() {
    console.log(this.productadd);
    this.submitted = true;
    if (!this.productadd.id || !this.productadd.name || !this.productadd.quantity || !this.productadd.price || !this.productadd.status) {
      return;
    }
    this.saveProduct();
  }
  
    

  }
