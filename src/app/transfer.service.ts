import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}

  private eventInstance: any = {};
  public eventData: any = [];

  setData(data: any) {
    this.eventInstance = data;
    this.eventData.push(this.eventInstance);
    console.log(this.eventData);
  }

  getFormData() {
    return this.eventData;
  }
}
