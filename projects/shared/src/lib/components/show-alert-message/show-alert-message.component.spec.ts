import {
  async,
  ComponentFixture,
  getTestBed,
  TestBed,
} from '@angular/core/testing';
import { ShowAlertMessageComponent } from './show-alert-message.component';
import { MatIconModule } from '@angular/material';
import { SharedService } from '../../../../../tools/src/lib/shared.service';

describe('ShowAlertMessageComponent', () => {
  let component: ShowAlertMessageComponent;
  let sharedService: SharedService;
  let injector: TestBed;
  let fixture: ComponentFixture<ShowAlertMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShowAlertMessageComponent],
      imports: [MatIconModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlertMessageComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    sharedService = injector.get(SharedService);
    fixture.detectChanges();
  });

  it('should create', () => {
    component.sharedService.pgErrorEmitter.emit('error');
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.errorMessage).toBe('error');
  });

  it('should clear error message', () => {
    component.errorMessage = 'Error Message Created';
    component.removeErrorMessage();
    expect(component.errorMessage).toBe('');
  });
});
