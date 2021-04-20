import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SideNavComponent } from './side-nav.component';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { SecureTokenService } from 'projects/tools/src/lib/services/secure-token/secure-token.service';


describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;
  const mockActivatedRoute = {};
  let mockMatDialogRef;
  let mockSecureTokenService;
  let mockRouter;

  beforeEach(async(() => {
    mockMatDialogRef = jasmine.createSpyObj(['close']);
    mockRouter = jasmine.createSpyObj(['navigate']);
    mockSecureTokenService = jasmine.createSpyObj(['logout']);

    TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MatDialogRef, useValue: mockMatDialogRef },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: SecureTokenService, useValue: mockSecureTokenService }

      ],
      imports: [MatIconModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close the page menu', () => {
    expect(mockMatDialogRef.close).toHaveBeenCalled();
  });

  describe('Handle Route Navigation', () => {

    it('should check path as signin and call logout of service', () => {
      expect(mockSecureTokenService.logout).toHaveBeenCalled();
    });

    it('should check router navigate method is called with path', () => {
      expect(mockRouter.navigate).toHaveBeenCalledWith(['mssetup'], { relativeTo: mockActivatedRoute });
    });

  });
});
