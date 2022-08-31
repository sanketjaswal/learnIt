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

  public ApiComingData: any;

  callAPI() {
    // this.ApiComingData = this.ApiData.FetchApiData();
    console.log(this.ApiComingData[0]);
  }

  favClick(DataIndex: any) {
    console.log(this.productList[DataIndex]);
  }
}
