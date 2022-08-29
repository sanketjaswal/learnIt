import { Component, OnInit } from '@angular/core';
import { NavOneComponent } from '../nav-one/nav-one.component';
import { NavTwoComponent } from '../nav-two/nav-two.component';
import { NavThreeComponent } from '../nav-three/nav-three.component';
import { FormComponent } from '../form/form.component';
import { FormDataNavComponent } from '../form-data-nav/form-data-nav.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
