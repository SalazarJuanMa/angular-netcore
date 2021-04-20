import { Component, OnInit } from '@angular/core';
import { SharedService } from 'projects/tools/src/lib/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public isGeneralInfoForm = false;
  public showHeader = true;

  constructor(
    public sharedService: SharedService,

  ) { }

  public ngOnInit(): void {
    this.sharedService.headerEmitter.subscribe((res: any) => {
      this.showHeader = res;
    });
  }
}
