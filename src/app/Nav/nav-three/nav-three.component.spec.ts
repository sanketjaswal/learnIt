import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavThreeComponent } from './nav-three.component';

describe('NavThreeComponent', () => {
  let component: NavThreeComponent;
  let fixture: ComponentFixture<NavThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
