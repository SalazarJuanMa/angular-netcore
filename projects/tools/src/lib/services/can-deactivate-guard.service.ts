import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  isDirty: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {
  constructor(private menuDialog: MatDialog) {}
  public canDeactivate(component: CanComponentDeactivate) {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
