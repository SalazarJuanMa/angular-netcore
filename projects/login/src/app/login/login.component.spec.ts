import {
  async,
  ComponentFixture,
  TestBed,
  getTestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule, routes } from '../../../../login/src/app/app-routing.module';
import { HomeComponent } from '../../../../ms-main-screen/src/app/home/home.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { of, throwError, defer } from 'rxjs';
import { SharedService } from '../../../../tools/src/lib/shared.service';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { SecureTokenService } from '../../../../tools/src/lib/services/secure-token/secure-token.service';
import { LoaderService } from '../../../../tools/src/lib/services/loader.service';
import { SecureTokenRequest } from '../../../../interfaces/src/lib/secure-token/secure-token-request.model';
import { environment } from '../../../../login/src/environments/environment';
import { SERVICE_ENDPOINTS } from '../../../../shared/src/lib/constants/constants';
import { HttpStatusCode } from '../../../../shared/src/lib/constants/enumeration';
import { APP_BASE_HREF } from '@angular/common';

export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const formBuilder: FormBuilder = new FormBuilder();
  let secureTokenService: SecureTokenService;
  let loaderService: LoaderService;
  let sharedService: SharedService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  const loginResponse = {
    status: 200,
    body: {
      secureToken: 'TeestToken',
      message: 'TestMessage',
    },
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        AppRoutingModule,
        HttpClientTestingModule,
      ],
      declarations: [LoginComponent, HomeComponent],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: FormBuilder, useValue: formBuilder },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    secureTokenService = injector.get(SecureTokenService);
    loaderService = injector.get(LoaderService);
    sharedService = injector.get(SharedService);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required]],
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the login form without values', () => {
    component.submit();
    expect(component.submitted).toBeTruthy();
  });

  it('should get the form controls', () => {
    expect(component.form).not.toBeNull();
  });

  // it('should submit the login form with correct values', fakeAsync(() => {
  //   const request: SecureTokenRequest = {
  //     UserName: 'test',
  //     PassWord: 'test',
  //     Domain: null,
  //   };
  //   component.loginForm.controls['userName'].setValue('test');
  //   component.loginForm.controls['password'].setValue('test');
  //   SecureTokenService.login = () => of(loginResponse);
  //   // TODO: resolve unit testing error
  //   // component.submit();
  //   tick(500);
  //   fixture.detectChanges();
  //   SecureTokenService.login(request).subscribe((res) => {
  //     expect(res).toBeDefined();
  //   });
  // }));

  it('should submit the login form with incorrect values', () => {
    component.returnUrl = '/';
    const request: SecureTokenRequest = {
      UserName: 'test',
      PassWord: 'incorrect',
      Domain: null,
    };
    secureTokenService
      .login(request)
      .subscribe(fail, (err: HttpErrorResponse) => {
        expect(err.status).toEqual(HttpStatusCode.NotFound);
      });
    component.submit();
    const req = httpMock.expectOne(
      `${environment.apiUrl}${SERVICE_ENDPOINTS.SECURE_TOKEN}`
    );
    req.flush('404 error', {
      status: HttpStatusCode.NotFound,
      statusText: 'Not Found',
    });
  });
});
