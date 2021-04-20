import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CommonDataService } from 'projects/tools/src/lib/services/common-data.service';
import { SecureTokenService } from 'projects/tools/src/lib/services/secure-token/secure-token.service';
import { SharedService } from 'projects/tools/src/lib/shared.service';
import {
  ICON,
  LOCAL_STORAGE,
  MODAL_DIALOG,
} from '../../constants/common.constant';
import { HEADER_CONST } from '../../constants/component.constant';
import { ConfirmationModalDialogComponent } from '../confirmation-modal-dialog/confirmation-modal-dialog.component';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public showBackButton = true;
  public showLogOutButton = true;
  public showHeader = true;
  public showMenuOptions = true;
  public templateContent = HEADER_CONST.TEMPLATE_CONST;
  public navigation = HEADER_CONST.NAV_BAR_CONST;
  public icon = ICON;
  public submitted = false;
  private dialogResult = false;
  public showBoxShadow = false;
  public headerTitle: string;
  @Input() public isGeneralInfoForm: boolean;

  constructor(
    public sharedService: SharedService,
    public pageMenudialog: MatDialog,
    private secureTokenService: SecureTokenService,
    private router: Router,
    private dataService: CommonDataService
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('signin')) {
          this.showMenuOptions = false;
        } else {
          this.showMenuOptions = true;
        }
      }
    });

    this.sharedService.headerEmitter.subscribe((res: any) => {
      this.showHeader = res;
    });
  }

  public ngOnInit(): void {
    this.sharedService.changeBackButton.subscribe((res: any) => {
      this.showBackButton = res;
    });
    this.sharedService.logoutEmitter.subscribe((res: any) => {
      this.showLogOutButton = res;
    });
    this.sharedService.sideNavLogOutEmitter.subscribe((res: any) => {
      this.logout();
    });
  }

  public ngAfterViewInit(): void {
    window.addEventListener('scroll', () => {
      this.showBoxShadow = window.scrollY >= 10;
    });
  }

  public get User(): string {
    if (localStorage.getItem(LOCAL_STORAGE.USER)) {
      return localStorage.getItem(LOCAL_STORAGE.USER);
    } else {
      return null;
    }
  }

  public openSideNav(): void {
    this.sharedService.toggleSideNav();
  }

  public logout(): void {
    //this.secureTokenService.logout();
    this.router.navigate(['signin']);
  }

  public Route(link: string): void {
    switch (link) {
      case 'toolbox':
        window.open('http://www.google.com/', '_blank');
        break;
      default:
        this.router.navigateByUrl(link);
        break;
    }
  }
}
