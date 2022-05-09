import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  formDelete : FormGroup;
  id : number;
  constructor(private productService:ProductService,
              private activatedRoute : ActivatedRoute,
              private router : Router) {
    // @ts-ignore
    this.activatedRoute.paramMap.subscribe((paramMap): ParamMap =>{
      this.id = +paramMap.get('id');
      const product=this.getProduct(this.id);
      this.formDelete=new FormGroup({
        id: new FormControl(product.id),
        name: new FormControl(product.name),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })
    })
  }
  getProduct(id: number) {
    return this.productService.findById(id);
  }
  deleteProduct(id: number) {
    this.productService.delete(id);
    this.router.navigate(['/delete/product']);
  }

  ngOnInit(): void {
  }

}
