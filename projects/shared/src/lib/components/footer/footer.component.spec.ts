import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer.component';
import { SharedService } from 'projects/tools/src/lib/shared.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  const mockSharedService = new SharedService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: SharedService, useValue: mockSharedService }
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the footer visibility on Initialization', () => {
    component.sharedService.logoutEmitter.emit(true);
    mockSharedService.setFooterVisibility();
    mockSharedService.changeBackButton.subscribe((result) => component.showFooter = result
    );
    component.ngOnInit();
    expect(component.showFooter).toBe(true);
  });

  it('should check the footer visibility on Destroy', () => {
    component.sharedService.logoutEmitter.emit(true);
    mockSharedService.setFooterVisibility();
    mockSharedService.changeBackButton.subscribe((result) => component.showFooter = result
    );
    component.ngOnDestroy();
    expect(component.showFooter).toBe(true);
  });
});
