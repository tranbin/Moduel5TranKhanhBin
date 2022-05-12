import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  formCreateProduct : FormGroup;
  categories : Category[] = [];
  constructor(private productService: ProductService,
              private router : Router,
              private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.formCreateProduct = new FormGroup({
      name :new FormControl(""),
      price : new FormControl(''),
      description : new FormControl(''),
      category : new FormControl('')
    })
    this.getAllCate();
  }
  saveProduct(){
    this.productService.createProduct(this.formCreateProduct.value).subscribe(()=>{

    },()=>{},
      ()=>{
      this.router.navigateByUrl('product/list')
      });
  }
  getAllCate(){
    this.categoryService.getAllCategory().subscribe(
      (category) =>{
        this.categories = category;
      }
    )
  }

}
