import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


const MaterialComponenets = [
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatIconModule,
  FormsModule,
  MatFormFieldModule,
  ReactiveFormsModule
];

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets],
})
export class MaterialModule {}
