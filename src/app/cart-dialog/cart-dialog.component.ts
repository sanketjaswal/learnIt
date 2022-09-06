import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css'],
})
export class CartDialogComponent implements OnInit {
  constructor(private Api: ApiServiceService) {}

  productList: any;
  public favArray: any = [];

  ngOnInit(): void {
    this.favArray = this.Api.GetapiCartData();
    console.log(this.favArray);
  }

  // favClick(DataIndex: any) {
  //   this.favArray.push(this.productList[DataIndex]);
  //   console.log(this.favArray);
  // }

  // removeFav(DataIndex: any) {
  //   this.favArray.splice(DataIndex, 1);
  // }
}
