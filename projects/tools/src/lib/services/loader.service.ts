import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderState } from '../../../../interfaces/src/lib/loader.model';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new Subject<LoaderState>();
  public loaderState = this.loaderSubject.asObservable();

  constructor() { }

  public showLoader(): void {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }

  public hideLoader(): void {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }
}
