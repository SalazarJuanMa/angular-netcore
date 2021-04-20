import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { SecureTokenService } from '../../../../tools/src/lib/services/secure-token/secure-token.service';
import { SharedService } from '../../../../tools/src/lib/shared.service';
import { SecureTokenRequest } from '../../../../interfaces/src/lib/secure-token/secure-token-request.model';
import { SecureTokenResponse } from '../../../../interfaces/src/lib/secure-token/secure-token-response.model';
import { ICON, LOCAL_STORAGE } from '../../../../shared/src/lib/constants/common.constant';
import { LOGIN_CONST } from '../../../src/constants/component.constant';
import { HttpStatusCode, PAGE_LEVEL_ERROR } from '../../../../shared/src/lib/constants/enumeration';

const ErrorMsgConst: typeof LOGIN_CONST.ERROR_MSG = LOGIN_CONST.ERROR_MSG;
const IconConst: typeof ICON = ICON;
const LocalStorageConst: typeof LOCAL_STORAGE = LOCAL_STORAGE;
const TemplateContentConst: typeof LOGIN_CONST.TEMPLATE_CONST = LOGIN_CONST.TEMPLATE_CONST;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public errorMsgConst: typeof LOGIN_CONST.ERROR_MSG;
  public templateContentConst: typeof LOGIN_CONST.TEMPLATE_CONST;
  public iconConst: typeof ICON;
  private SecureTokenModel: SecureTokenRequest;
  private localStorageConst: typeof LOCAL_STORAGE;
  public loginForm: FormGroup;
  public returnUrl: string;
  public submitted = false;

  public get form(): any { return this.loginForm.controls; }

  @ViewChild('username', { static: true }) public usernameRef: ElementRef;

  constructor(
    private secureTokenService: SecureTokenService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
  ) {
    this.setUserControls(false);
    this.errorMsgConst = ErrorMsgConst;
    this.iconConst = IconConst;
    this.localStorageConst = LocalStorageConst;
    this.templateContentConst = TemplateContentConst;
  }

  public ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initializeForm();
    localStorage.clear();
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  public ngOnDestroy(): void {
    this.setUserControls();
  }

  private initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      userName: [
        '',
        [
          Validators.required,
          Validators.minLength(this.errorMsgConst.MINLENGTH.LIMIT),
        ],
      ],
      password: ['', [Validators.required]],
    });
    this.usernameRef.nativeElement.focus();
  }

  public submit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    const formData = this.loginForm.value;
    this.SecureTokenModel = {
      UserName: formData.userName,
      PassWord: formData.password,
      Domain: null,
    };
    this.secureTokenService.login(this.SecureTokenModel).subscribe(
      (res: HttpResponse<any>) => {
        if (res.status === HttpStatusCode.Success) {
          const secureTokenResponse: SecureTokenResponse = res.body;
          this.setValuesToLocalStorage(secureTokenResponse);
          this.router.navigateByUrl(this.returnUrl);
        }
      },
      (err: HttpErrorResponse) => {
        if (err.status === HttpStatusCode.NotFound) {
          this.sharedService.showPageLevelError(PAGE_LEVEL_ERROR.LOGIN_FAILED);
          window.scrollTo(0, 0);
        }
      }
    );
  }

  private setValuesToLocalStorage(secureTokenResponse: SecureTokenResponse): void {
    localStorage.setItem(
      this.localStorageConst.Authorization,
      secureTokenResponse.authorization
    );
    localStorage.setItem(this.localStorageConst.USER, secureTokenResponse.userName);
    localStorage.setItem(this.localStorageConst.USER_ID, secureTokenResponse.userId);
  }

  private setUserControls(value = true): void {
    this.sharedService.setHeaderVisibility(value);
    this.sharedService.setLogoutVisibility(value);
    this.sharedService.setFooterVisibility(value);
    this.sharedService.checkNavToOtherComps();
  }
}
