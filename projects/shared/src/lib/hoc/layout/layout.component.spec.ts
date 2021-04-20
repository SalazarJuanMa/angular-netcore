import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatStepperNext } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../../../../../vendors/src/lib/material-module';
import { HeaderComponent } from '../../components/header/header.component';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        CdkStepperModule,
        BrowserAnimationsModule,
      ],
      providers: [
        [HeaderComponent],
        {
          provide: CdkStepper,
          useValue: {},
        },
        {
          provide: MatStepperNext,
          useValue: {},
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
