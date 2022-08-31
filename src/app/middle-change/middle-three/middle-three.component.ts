import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-middle-three',
  templateUrl: './middle-three.component.html',
  styleUrls: ['./middle-three.component.css'],
})
export class MiddleThreeComponent implements OnInit {
  constructor(private apiServiceData: ApiServiceService) {}

  apiForm = new FormGroup({
    apiTitle: new FormControl(''),
    apiPrice: new FormControl(''),
    apiDesc: new FormControl(''),
    ApiCategory: new FormControl(''),
    apiImage: new FormControl(''),
    apiRate: new FormControl(''),
    apiCount: new FormControl(''),
  });

  ngOnInit(): void {}

  cancelData() {
    this.apiForm = new FormGroup({
      apiTitle: new FormControl(''),
      apiPrice: new FormControl(''),
      apiDesc: new FormControl(''),
      ApiCategory: new FormControl(''),
      apiImage: new FormControl(''),
      apiRate: new FormControl(''),
      apiCount: new FormControl(''),
    });
  }

  getData() {
    this.apiServiceData.setApiData(this.apiForm.value);
    this.cancelData();
  }
}

