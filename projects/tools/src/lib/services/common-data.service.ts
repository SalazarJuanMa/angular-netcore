import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  public commonDataMethod$: Observable<any>;
  private commonDataSubject = new Subject<any>();
  constructor() {
    this.commonDataMethod$ = this.commonDataSubject.asObservable();
  }
  public getCommonData(data): void {
    this.commonDataSubject.next(data);
  }
}
