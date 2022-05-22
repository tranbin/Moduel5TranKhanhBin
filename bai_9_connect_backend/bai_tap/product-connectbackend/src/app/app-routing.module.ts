import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from "./product/product-list/product.component";
import {ProductCreateComponent} from "./product/product-create/product-create.component";
import {ProductEditComponent} from "./product/product-edit/product-edit.component";
import {ProductDetailComponent} from "./product/product-detail/product-detail.component";


const routes: Routes = [
  {path :'product/list',component : ProductComponent},
  {path :'product/add',component: ProductCreateComponent},
  {path :'product/update/:id',component: ProductEditComponent},
  {path :'product/detail/:id',component: ProductDetailComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
