import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductSystem } from '../ProductSystem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  implements OnInit  {

  product: ProductSystem = new ProductSystem();
  id!: number;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
      this.id = +this.route.snapshot.params['id'];
      this.productService.getProductById(this.id).subscribe(data => {
        this.product = data;
      }, error => console.error(error));
    }
      
    goToProductList(): void {
      this.router.navigate(['/Products']);
    }
  }


