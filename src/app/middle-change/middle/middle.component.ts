import { Component, OnInit } from '@angular/core';
import { MiddleOneComponent } from '../middle-one/middle-one.component';
import { MiddleTwoComponent } from '../middle-two/middle-two.component';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
