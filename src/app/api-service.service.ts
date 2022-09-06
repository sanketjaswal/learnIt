import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private http: HttpClient) {}

  public apiData: any = [];

  // FetchApiData() {
  //   fetch('https://fakestoreapi.com/products')
  //     .then((res) => res.json())
  //     .then((res) => (this.apiData = res));y
  //   return this.apiData;
  // }

  getProduct() {
    return this.http.get<any>('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  private apiInstance: any = {};
  public apiFormData: any = [];

  setApiData(data: any) {
    this.apiInstance = data;
    this.apiFormData.push(this.apiInstance);
    console.log(this.apiFormData);
  }

  public favarray: any;

  SetapiCartData(data: any) {
    this.favarray = (data);
    console.log(this.favarray);
  }

  GetapiCartData(){
    return this.favarray;
  };
}
