import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HOST } from './../_shared/var.constant';
import { Subject } from 'rxjs';
import { StoreCategory } from './../_model/storeCategory'

@Injectable({
  providedIn: 'root'
})
export class StoreCategoryService {

  //pacienteCambio = new Subject<StoreCategory[]>();

  url: string = `${HOST}/storeCategory`;

  constructor(private http: HttpClient) { }

  getStoreCategories() {
    return this.http.get<StoreCategory[]>(this.url);
  }

}
