import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";
import { ProductSystem } from "../ProductSystem";



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  id!: number;
  product: ProductSystem = new ProductSystem;
  
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    }, error => console.error(error));
  }
   

  editProduct(): void {
    this.productService.editProduct(this.id, this.product).subscribe(data => {
      console.log(data);
      this.goToProductList();
    }, error => console.error(error));
  }
    
    
  goToProductList(): void {
    this.router.navigate(['/Products']);
  }
}