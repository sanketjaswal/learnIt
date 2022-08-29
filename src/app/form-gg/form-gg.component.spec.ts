import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGgComponent } from './form-gg.component';

describe('FormGgComponent', () => {
  let component: FormGgComponent;
  let fixture: ComponentFixture<FormGgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
