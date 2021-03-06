import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class DeactivateGuardService
  implements CanDeactivate<CanComponentDeactivate> {
  public canDeactivate(component: CanComponentDeactivate): any {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
