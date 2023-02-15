import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { ProductSystem } from "./ProductSystem";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  [x: string]: any;
  posttProductById: any;
  postProductById(id: number) {
    throw new Error("Method not implemented.");
  }

  private baseURL = "http://localhost:1234/";

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<ProductSystem[]>{
    return this.httpClient.get<ProductSystem[]>(`${this.baseURL}`);
  }

  addProduct(product: ProductSystem ): Observable<Object> {
    return this.httpClient.post<ProductSystem>(`${this.baseURL}save`, product);
  }

  getProductById(id: number): Observable<ProductSystem> {
    return this.httpClient.get<ProductSystem>(`${this.baseURL}products/${id}`);
  }

  editProduct(id: number, product: ProductSystem): Observable<object> {
    return this.httpClient.post(`${this.baseURL}editProduct/${id}`, product);
  }

  deleteProduct(id: number): Observable<object> {
    return this.httpClient.get(`${this.baseURL}deleteProduct/${id}`);
}


}
