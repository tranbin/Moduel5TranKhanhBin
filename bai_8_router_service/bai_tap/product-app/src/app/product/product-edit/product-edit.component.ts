import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IProduct} from "../../../models/IProduct";
import {ProductService} from "../../service/product.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  formUpdate: FormGroup;
  id : number;

  constructor(private productService: ProductService,
              private activatedRouter: ActivatedRoute) {
    this.activatedRouter.paramMap.subscribe((paramMap) => this.id = +paramMap.get('id'));
    const product = this.getProduct(this.id);
    this.formUpdate = new FormGroup({
      id: new FormControl(product.id),
      name: new FormControl(product.name),
      price: new FormControl(product.price),
      description: new FormControl(product.description)
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.formUpdate.value;
    this.productService.updateProduct(id, product);
  }
}
