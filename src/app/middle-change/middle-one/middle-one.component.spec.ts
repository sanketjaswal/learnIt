import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleOneComponent } from './middle-one.component';

describe('MiddleOneComponent', () => {
  let component: MiddleOneComponent;
  let fixture: ComponentFixture<MiddleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
