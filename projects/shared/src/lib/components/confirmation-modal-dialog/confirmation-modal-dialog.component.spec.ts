import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule, MatDialog, MatDialogModule, MatDialogRef, MatDialogTitle, MatIconModule, MAT_DIALOG_DATA } from '@angular/material';
import { MSButtonModule } from '../ms-button/ms-button.module';
import { MSLoadingSpinnerModule } from '../loader/loader.module';

import { ConfirmationModalDialogComponent } from './confirmation-modal-dialog.component';

describe('ConfirmationModalDialogComponent', () => {
  let component: ConfirmationModalDialogComponent;
  let fixture: ComponentFixture<ConfirmationModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MSLoadingSpinnerModule,
        MSButtonModule
      ],
      declarations: [ ConfirmationModalDialogComponent ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
     ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true on confirm', () => {
    component.dialogRef.close = () => {};
    component.onStay();
  });

  it('should return false on dismiss', () => {
    component.dialogRef.close = () => {};
    component.onLeave();
  });
});
