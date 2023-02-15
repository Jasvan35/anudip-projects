import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDeleteComponent } from "./product-delete/product-delete.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductListComponent } from "./product-list/product-list.component";


const routes: Routes = [
  {path: 'Products',               component: ProductListComponent    },
  {path: 'AddProducts',            component: ProductAddComponent     },
  {path: 'EditProducts/:id',       component: ProductEditComponent    },
  {path: 'DeleteProducts/:id',     component: ProductDeleteComponent  },
  {path: 'ProductDetails/:id',     component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
