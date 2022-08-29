import { MiddleComponent } from './middle-change/middle/middle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleOneComponent } from './middle-change/middle-one/middle-one.component';
import { MiddleTwoComponent } from './middle-change/middle-two/middle-two.component';
import { MiddleThreeComponent } from './middle-change/middle-three/middle-three.component';
import { FormGgComponent } from './form-gg/form-gg.component';
import { FormDataComponent } from './form-data/form-data.component';

const routes: Routes = [
  { path: '', component: MiddleComponent },
  { path: 'navOne', component: MiddleOneComponent },
  { path: 'navTwo', component: MiddleTwoComponent },
  { path: 'navThree', component: MiddleThreeComponent },
  { path: 'form', component: FormGgComponent },
  { path: 'formData', component: FormDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
