import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-middle-two',
  templateUrl: './middle-two.component.html',
  styleUrls: ['./middle-two.component.css'],
})
export class MiddleTwoComponent implements OnInit {
  constructor(private Api: ApiServiceService) {}

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

  showCart() {
    document.getElementsByClassName('favPage')[0].className = 'favPage2';
  }

  hideCart(){
    document.getElementsByClassName('favPage2')[0].className = 'favPage';

  };
}
