import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSButtonComponent } from './ms-button.component';

describe('MSButtonComponent', () => {
  let component: MSButtonComponent;
  let fixture: ComponentFixture<MSButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
