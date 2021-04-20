import { Component, Input, OnInit } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'lib-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {
  public timedOutCloser: any;
  @Input() public navigation: any;

  constructor() {}

  public ngOnInit(): void {}

  public mouseEnter(trigger: MatMenuTrigger): void {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    setTimeout(() => {
      trigger.openMenu();
    }, 100);
  }

  public mouseLeave(trigger: MatMenuTrigger): void {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 100);
  }
}
