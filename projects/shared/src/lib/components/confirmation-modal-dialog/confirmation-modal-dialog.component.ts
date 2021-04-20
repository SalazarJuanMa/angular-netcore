import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ICON } from '../../constants/common.constant';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'lib-confirmation-modal-dialog',
  templateUrl: './confirmation-modal-dialog.component.html',
  styleUrls: ['./confirmation-modal-dialog.component.scss'],
})
export class ConfirmationModalDialogComponent implements OnInit {
  public icon = ICON;
  public dialogData: DialogData;
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  public ngOnInit(): void {}

  public onLeave(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  public onStay(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
}
