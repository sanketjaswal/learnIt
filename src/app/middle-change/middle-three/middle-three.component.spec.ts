import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleThreeComponent } from './middle-three.component';

describe('MiddleThreeComponent', () => {
  let component: MiddleThreeComponent;
  let fixture: ComponentFixture<MiddleThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiddleThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
