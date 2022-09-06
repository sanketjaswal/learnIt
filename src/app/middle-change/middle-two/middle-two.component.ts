import { CartDialogComponent } from './../../cart-dialog/cart-dialog.component';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
//  import { A11yModule } from '@angular/cdk/a11y'; 

@Component({
  selector: 'app-middle-two',
  templateUrl: './middle-two.component.html',
  styleUrls: ['./middle-two.component.css'],
})
export class MiddleTwoComponent implements OnInit {
  constructor(private Api: ApiServiceService, private dialog: MatDialog) {}

  productList: any;
  ngOnInit(): void {
    // this.callAPI();
    this.Api.getProduct().subscribe((res) => {
      this.productList = res;
      console.log(this.productList);
    });
  }

  // public ApiComingData: any;

  // callAPI() {
  //   this.ApiComingData = this.ApiData.FetchApiData();
  //   console.log(this.ApiComingData[0]);
  // }

  public favArray: any = [];

  favClick(DataIndex: any) {
    this.favArray.push(this.productList[DataIndex]);
    console.log(this.favArray);
  }

  removeFav(DataIndex: any) {
    this.favArray.splice(DataIndex, 1);
  }

  statusClass = 'favPage';

  setActiveClass() {
    if (this.statusClass === 'favPage') {
    }
  }

  // showCart() {
  //   document.getElementsByClassName('favPage')[0].className = 'favPage2';
  // }

  // hideCart() {
  //   document.getElementsByClassName('favPage2')[0].className = 'favPage';
  // }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    // dialogConfig.data =(
    //   this.favArray);

    this.dialog.open(
      CartDialogComponent,
      dialogConfig
    );
    this.Api.SetapiCartData(this.favArray);
  }
}
