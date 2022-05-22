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

  getAllProduct(x : number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_API + '?_page=' + x + '&_limit=3');
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

  deleteProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.URL_API + '/' + id);
  }

  searchByName(name: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.URL_API + '?' + 'name_like=' + name);
  }
}
