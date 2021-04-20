import {
  Component,
  OnInit,
  HostListener,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

import { SharedService } from '../../../../../tools/src/lib/shared.service';
import { ICON } from '../../constants/common.constant';

@Component({
  selector: 'app-page-error-message',
  templateUrl: './show-alert-message.component.html',
  styleUrls: ['./show-alert-message.component.scss'],
})
export class ShowAlertMessageComponent
  implements OnInit, OnDestroy, AfterViewInit {
  public icon = ICON;
  public errorMessage = '';
  constructor(public sharedService: SharedService) {}

  public ngOnInit(): void {
    this.sharedService.pgErrorEmitter.subscribe((res) => {
      this.errorMessage = res;
    });
  }

  public ngAfterViewInit(): void {}

  public ngOnDestroy(): void {
    this.sharedService.pgErrorEmitter.unsubscribe();
  }

  @HostListener('window:click', ['$event'])
  public onWindowClick(event: Event) {
    const element = event.target as HTMLElement;
    const errorMsgElement = document.getElementById('errorMsg');
    if (errorMsgElement) {
      const isDisablePageLevelError = !errorMsgElement.contains(element);
      if (isDisablePageLevelError) {
        this.removeErrorMessage();
      }
    }
  }

  public removeErrorMessage(): void {
    this.errorMessage = '';
  }

}
