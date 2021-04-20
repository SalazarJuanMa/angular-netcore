import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  getTestBed,
} from '@angular/core/testing';
import {
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  EventEmitter,
} from '@angular/core';
import { HeaderComponent } from './header.component';
import { SharedService } from '../../../../../tools/src/lib/shared.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SecureTokenService } from '../../../../../tools/src/lib/services/secure-token/secure-token.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let injector: TestBed;
  let mockSharedService = new SharedService();
  let mockMatDialog;
  let mockSecureTokenService;
  let mockRouter;
  beforeEach(async(() => {
    mockMatDialog = jasmine.createSpyObj(['close', 'open']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockSecureTokenService = jasmine.createSpyObj(['logout']);

    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: SharedService, useValue: mockSharedService },
        { provide: MatDialog, useValue: mockMatDialog },
        { provide: Router, useValue: mockRouter },
        { provide: SecureTokenService, useValue: mockSecureTokenService },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    mockSharedService = new SharedService();
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the back button visibility', () => {
    component.sharedService.changeBackButton.emit(true);
    mockSharedService.setBackButtonVisibility();
    mockSharedService.changeBackButton.subscribe(
      (result) => (component.showBackButton = result)
    );
    const event = new Event('scroll');
    component.ngOnInit();
    window.dispatchEvent(event);
    expect(component.showBackButton).toBe(true);
  });

  it('should check the logout button visibility', () => {
    component.sharedService.logoutEmitter.emit(true);
    mockSharedService.setLogoutVisibility();
    mockSharedService.changeBackButton.subscribe(
      (result) => (component.showBackButton = result)
    );
    component.ngOnInit();
    expect(component.showLogOutButton).toBe(true);
  });

  it('should call open menu', () => {
    expect(component.pageMenudialog.open).toHaveBeenCalled();
  });

  it('should check logout of SecureTokenService is called', () => {
    component.logout();
    expect(mockSecureTokenService.logout).toHaveBeenCalled();
  });

  it('should check navigate of router is called', () => {
    component.logout();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['signin']);
  });
});
