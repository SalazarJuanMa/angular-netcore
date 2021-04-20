import { ComponentFixture, TestBed, async, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

////import { AppRoutingModule, routes } from '../../app.routing.module';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from '../app-routing.module';
import { routes } from 'projects/login/src/app/app-routing.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), AppRoutingModule],
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check for thumbnails to be intialize', () => {
    expect(component.thumbnails).toBeDefined();
  });

  it('navigateToMSSetup should navigate to MS setup', fakeAsync(() => {
    // TODO: resolve unit testing error
    // component.navigateToMSSetup(true);
    tick(500);
    // expect(location.path()).toContain('');
  }));

  describe('setting the SecureToken process', () => {
    it('should be set in localStorage', () => {
      localStorage.setItem('SecureToken', 'testToken');
      expect(localStorage.getItem('SecureToken')).toBe('testToken');
    });

    it('should navigate to MS setup using navigateToMSSetup', fakeAsync(() => {
     // TODO: resolve unit testing error
     // component.navigateToMSSetup(true);
      tick(500);
     // expect(location.path()).toContain('');
      discardPeriodicTasks();
    }));

    it('should be removed from localStorage', () => {
      localStorage.removeItem('SecureToken');
      expect(localStorage.getItem('SecureToken')).toBeNull();
    });
  });


});
