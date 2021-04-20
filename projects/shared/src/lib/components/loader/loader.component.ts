import { Component, OnInit, OnDestroy } from '@angular/core';

import { LoaderService } from '../../../../../tools/src/lib/services/loader.service';
import { LoaderState } from '../../../../../interfaces/src/lib/common/loader.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit, OnDestroy {
  public show = false;
  private subscription: Subscription;
  public timer: any;

  constructor(private loaderService: LoaderService) {}

  public ngOnInit(): void {
    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
        clearTimeout(this.timer);
        if (!state.show) {
          this.timer = setTimeout(() => {
            this.show = state.show;
          }, 100);
        } else {
          this.show = state.show;
        }
      }
    );
  }
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
