import { TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CanDeactivateGuardService } from './can-deactivate-guard.service';

describe('CanDeactivateGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      MatDialogModule,
      MatCardModule,
    ],
    providers: [
      {
        provide: MatDialogRef,
        useValue: {}
      },
      { provide: MAT_DIALOG_DATA, useValue: {} },
   ],
  }));

  it('should be created', () => {
    const service: CanDeactivateGuardService = TestBed.get(CanDeactivateGuardService);
    expect(service).toBeTruthy();
  });
});
