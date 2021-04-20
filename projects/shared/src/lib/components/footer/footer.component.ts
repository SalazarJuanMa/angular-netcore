import { Component, OnInit, OnDestroy } from '@angular/core';

import { SharedService } from '../../../../../tools/src/lib/shared.service';
import { ICON, FOOTER_CONST } from '../../constants/common.constant';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent implements OnInit, OnDestroy {
  public showFooter = true;
  public templateContent = FOOTER_CONST.TEMPLATE_CONST;
  private icon = ICON;

  constructor(public sharedService: SharedService) { }

  public ngOnInit(): void {
    this.sharedService.footerEmitter.subscribe((res) => {
      this.showFooter = res;
    });
  }

  public ngOnDestroy(): void {
    this.sharedService.footerEmitter.subscribe((res) => {
      this.showFooter = res;
    });
  }
}
