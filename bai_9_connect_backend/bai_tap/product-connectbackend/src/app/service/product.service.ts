import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../model/Product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  URL_API = "http://localhost:3000/products";

  constructor(private httpClient: HttpClient) {
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_API);
  }

  createProduct(product: Product): Observable<any> {
    return this.httpClient.post(this.URL_API, product);
  }

  updateProduct(product: Product): Observable<void> {
    return this.httpClient.patch<void>(this.URL_API + '/' + product.id, product);
  }

  findProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.URL_API + '/' + id);
  }
  deleteProduct(id : number){
    return this.httpClient.delete(this.URL_API + '/' + id);
  }
}
