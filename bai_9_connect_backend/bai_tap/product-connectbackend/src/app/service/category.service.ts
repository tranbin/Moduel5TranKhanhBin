import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  URL_API = "http://localhost:3000/categories";
  constructor(private httpClient : HttpClient) { }
  getAllCategory():Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.URL_API);
  }
}
