import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/Product";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/Category";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  categories: Category[] = [];
  searchForm: FormGroup;
  x = 1;

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.productService.getAllProduct(this.x).subscribe((value => {
        this.products = value;
      }),
      () => {
      },
      () => {
      });
    this.searchForm = new FormGroup({
      name: new FormControl()
    });
  }

  search() {
    this.productService.searchByName(this.searchForm.value.name).subscribe((data) => {
      this.products = data;
    }, () => {
    }, () => {
    })
  }

  delete(id: number, name: any) {
    if (confirm("Are you sure delete " + name + '?')) {
      this.productService.deleteProduct(id).subscribe(() => {
      }, () => {
      }, () => {
        this.ngOnInit();
      });
    }

  }
  nextPage() {
    this.x = this.x + 1;
    console.log(this.x);
    this.ngOnInit();
  }

  backPage() {
    this.x = this.x - 1;
    this.ngOnInit();
  }
}
