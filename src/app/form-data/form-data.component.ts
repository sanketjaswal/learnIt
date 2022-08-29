import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css'],
})
export class FormDataComponent implements OnInit {
  constructor(private FormSevice: TransferService) {}

  ngOnInit(): void {
    this.callService();
  }

  public EventComingData: any;

  callService() {
    this.EventComingData = this.FormSevice.getFormData();
    console.log(this.EventComingData);
  }

  // DataIndex: any;

  deleteDataTab(DataIndex: any) {
    console.log(this.EventComingData[DataIndex]);
    delete this.EventComingData[DataIndex];
    console.log(this.EventComingData)
    //  let routerLink = '/formData';
    //  document.getElementsByTagName('a').click;
  }
}
