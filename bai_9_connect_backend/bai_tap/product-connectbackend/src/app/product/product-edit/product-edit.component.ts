import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product : Product;
  categories : Category[] = [];
  editForm : FormGroup;
  constructor(private productService : ProductService,
              private categoryService : CategoryService,
              private activatedRouter : ActivatedRoute,
              private router : Router,
              private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap : ParamMap) =>{
      const id =Number(paramMap.get('id'));
      this.productService.findProductById(id).subscribe(next =>{
        this.product = next;
        this.editForm.patchValue({
          id : this.product.id,
          name : this.product.name,
          price : this.product.price,
          description : this.product.description,
          category : this.product.category
        });
      });
    });
    this.editForm = this.formBuilder.group({
      id : new FormControl(''),
      name : new FormControl(''),
      price : new FormControl(''),
      description : new FormControl(''),
      category : new FormControl('')
    })
    this.getAllCate();
  }
  submidSave():void{
    if (this.editForm.valid){
      this.product = this.editForm.value;
      this.productService.updateProduct(this.product).subscribe(()=>{

      },()=>{},()=>{
      this.router.navigateByUrl('product/list')
      })
    }
  }
  getAllCate(){
    this.categoryService.getAllCategory().subscribe(
      (category) =>{
        this.categories = category;
      }
    )
  }
}
