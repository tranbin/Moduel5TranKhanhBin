import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  categories: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((value => {
        this.products = value;
      }),
      () => {
      },
      () => {
      })
  }

  delete(id: number) {
    this.productService.deleteProduct(id).subscribe();
    this.ngOnInit();
  }

  /*    this.getAllCate();*/
  /*  getAllCate(){
      this.categoryService.getAllCategory().subscribe(
        (category) =>{
          this.categories = category;
        }
      )
    }*/
}
