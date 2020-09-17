import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface GenericConfirmDialogData {
  titleBox: string;
  message: string;
  buttonYesText: string;
}

@Component({
  selector: 'app-generic-confirm',
  templateUrl: './generic-confirm.component.html',
  styleUrls: ['./generic-confirm.component.css']
})
export class GenericConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<GenericConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GenericConfirmDialogData) { }
}

