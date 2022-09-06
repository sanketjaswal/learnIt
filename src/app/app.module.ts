import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Nav/nav-bar/nav-bar.component';
import { MiddleComponent } from './middle-change/middle/middle.component';
import { FooterComponent } from './footer/footer.component';
import { MiddleOneComponent } from './middle-change/middle-one/middle-one.component';
import { MiddleTwoComponent } from './middle-change/middle-two/middle-two.component';
import { MiddleThreeComponent } from './middle-change/middle-three/middle-three.component';
import { NavOneComponent } from './Nav/nav-one/nav-one.component';
import { NavTwoComponent } from './Nav/nav-two/nav-two.component';
import { NavThreeComponent } from './Nav/nav-three/nav-three.component';
import { FormComponent } from './Nav/form/form.component';
import { FormGgComponent } from './form-gg/form-gg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransferService } from './transfer.service';
import { FormDataComponent } from './form-data/form-data.component';
import { FormDataNavComponent } from './Nav/form-data-nav/form-data-nav.component';
import { HttpClientModule } from '@angular/common/http';
// import { FormControl, FormGroup } from '@angular/forms';
 import { MatDialogModule } from '@angular/material/dialog';
import { CartDialogComponent } from './cart-dialog/cart-dialog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MiddleComponent,
    FooterComponent,
    MiddleOneComponent,
    MiddleTwoComponent,
    MiddleThreeComponent,
    NavOneComponent,
    NavTwoComponent,
    NavThreeComponent,
    FormComponent,
    FormGgComponent,
    FormDataComponent,
    FormDataNavComponent,
    CartDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [TransferService],
  bootstrap: [AppComponent],
})
export class AppModule {}
