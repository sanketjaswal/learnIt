import { Component } from '@angular/core';
import { FormDataComponent } from './form-data/form-data.component';
import { NavBarComponent } from './Nav/nav-bar/nav-bar.component';
import { MiddleComponent } from './middle-change/middle/middle.component';
import { FooterComponent } from './footer/footer.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnIt';
}
