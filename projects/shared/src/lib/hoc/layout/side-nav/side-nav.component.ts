import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { SharedService } from 'projects/tools/src/lib/shared.service';
import { ICON, LOCAL_STORAGE } from '../../../constants/common.constant';
import { HEADER_CONST } from '../../../constants/component.constant';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public icon = ICON;
  public navigation = HEADER_CONST.NAV_BAR_CONST;
  public templateContent = HEADER_CONST.TEMPLATE_CONST;
  public showLogOutButton = true;
  private windowMediumSize = 991;
  @ViewChild('sidenav', { static: true }) public sidenav: MatSidenav;

  constructor(private router: Router, private sharedService: SharedService) {}

  public ngOnInit(): void {
    this.sharedService.sideNavEmitter.subscribe((data: any) => {
      this.sidenav.toggle();
    });
    this.sharedService.logoutEmitter.subscribe((res) => {
      this.showLogOutButton = res;
    });
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: any): void {
    if (event.target.innerWidth > this.windowMediumSize) {
      this.sidenav.close();
    }
  }

  public get User(): string {
    if (localStorage.getItem(LOCAL_STORAGE.USER)) {
      return localStorage.getItem(LOCAL_STORAGE.USER);
    } else {
      return null;
    }
  }

  public Route(link: string): void {
    this.toggleSideNav();
    this.router.navigateByUrl(link);
  }

  public toggleSideNav(): void {
    this.sharedService.toggleSideNav();
  }

  public logout(): void {
    this.toggleSideNav();
    this.sharedService.LogOutFromSideNav();
  }
}
