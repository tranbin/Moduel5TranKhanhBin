import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ProductDAO} from "../../../dao/ProductDAO";
import {IProduct} from "../../../models/IProduct";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = ProductDAO.productDAO;

  constructor() {
  }

  ngOnInit(): void {
    ;
  }

}
