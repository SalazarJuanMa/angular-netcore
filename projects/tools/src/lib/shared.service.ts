import { Injectable, EventEmitter, Output } from '@angular/core';
import { LOCAL_STORAGE } from '../../../shared/src/lib/constants/common.constant';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public isShowPageLevelError = true;

  @Output() public changeBackButton: EventEmitter<boolean> = new EventEmitter();
  @Output() public headerEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() public logoutEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() public footerEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() public pgErrorEmitter: EventEmitter<string> = new EventEmitter();
  @Output() public idEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() public sideNavEmitter: EventEmitter<any> = new EventEmitter();
  @Output() public sideNavLogOutEmitter: EventEmitter<
    boolean
  > = new EventEmitter();
  @Output() public stepperNavEmitter: EventEmitter<any> = new EventEmitter();
  @Output() public stepperNavByIndexEmitter: EventEmitter<
    any
  > = new EventEmitter();
  @Output() public genInfoFormReloadEmitter: EventEmitter<
  any
> = new EventEmitter();
  constructor() {}

  public checkNavToOtherComps(): void {
    if (localStorage.getItem(LOCAL_STORAGE.ID)) {
      this.idEmitter.emit(true);
    } else {
      this.idEmitter.emit(false);
    }
  }

  public setHeaderVisibility(value = true): void {
    this.headerEmitter.emit(value);
  }

  public setLogoutVisibility(value = true): void {
    this.logoutEmitter.emit(value);
  }

  public setFooterVisibility(value = true): void {
    this.footerEmitter.emit(value);
  }

  public showPageLevelError(value: string = ''): void {
    this.pgErrorEmitter.emit(value);
  }

  public toggleSideNav(): void {
    this.sideNavEmitter.emit('');
  }

  public LogOutFromSideNav(): void {
    this.sideNavLogOutEmitter.emit(true);
  }

  public wizardStepperNavigate(value: any): void {
    this.stepperNavEmitter.emit(value);
  }

  public wizardStepperNavigateByIndex(value: any): void {
    this.stepperNavByIndexEmitter.emit(value);
  }

  public ReloadGenInfoForm(value: any): void {
    this.genInfoFormReloadEmitter.emit(value);
  }
}
