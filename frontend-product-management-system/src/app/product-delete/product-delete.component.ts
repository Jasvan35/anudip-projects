import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../product.service";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  
  id!: number;
  deleteSuccess: boolean = false;




  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
  }

  deleteProduct() {
    this.productService.deleteProduct(this.id).subscribe(Response => {
      this.deleteSuccess = true;
      this.goToProductList();
      
    }, error => console.error(error));
  }
    
      goToProductList(): void {
        this.router.navigate(['/Products']);
      }
      }