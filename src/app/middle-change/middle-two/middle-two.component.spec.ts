import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleTwoComponent } from './middle-two.component';

describe('MiddleTwoComponent', () => {
  let component: MiddleTwoComponent;
  let fixture: ComponentFixture<MiddleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
