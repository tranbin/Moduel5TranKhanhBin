import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {Category} from "../../model/Category";
import {CategoryService} from "../../service/category.service";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  categories: Category[] = [];

  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private activatedRouter : ActivatedRoute,
              private router : Router) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap : ParamMap)=>{
      const id = Number(paramMap.get('id'));
      this.productService.findProductById(id).subscribe(next =>{
        this.product = next;
      })
    })
    this.getAllCate();
  }

  getAllCate() {
    this.categoryService.getAllCategory().subscribe(
      (category) => {
        this.categories = category;
      }
    )
  }
}
