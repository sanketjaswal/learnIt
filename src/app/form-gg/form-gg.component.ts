import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-gg',
  templateUrl: './form-gg.component.html',
  styleUrls: ['./form-gg.component.css'],
})
export class FormGgComponent implements OnInit {
  constructor(private formServiceData: TransferService) {

  }

  ngOnInit(): void {}

  // public eventName: string = '';
  // public descName: string = '';
  // public addName: string = '';
  // public contName: string = '';
  // public mailName: any = '';

  // public inputData: any = {};
  // public eventDataes: any = [];

  eventForm = new FormGroup({
    eventNme: new FormControl(''),
    descNme: new FormControl(''),
    addNme: new FormControl(''),
    contNme: new FormControl(''),
    mailNme: new FormControl(''),
  });

  getData() {
    // console.log(this.eventForm.value);

    // this.eventDataes.push(this.eventForm.value);
    // console.log(this.eventDataes);
    // this.inputData = {};  

    this.formServiceData.setData(this.eventForm.value);

    this.eventForm = new FormGroup({
      eventNme: new FormControl(''),
      descNme: new FormControl(''),
      addNme: new FormControl(''),
      contNme: new FormControl(''),
      mailNme: new FormControl(''),
    });
  }
}
