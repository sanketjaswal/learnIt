import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataNavComponent } from './form-data-nav.component';

describe('FormDataNavComponent', () => {
  let component: FormDataNavComponent;
  let fixture: ComponentFixture<FormDataNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDataNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
