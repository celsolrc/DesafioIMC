import { GenericConfirmComponent } from './generic-confirm/generic-confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

export enum ConfirmTypes {
  YESNO = 0,
  OKCANCEL = 1,
  OKCLOSE = 2,
  OK = 3,
  CANCEL = 4
}

@Injectable({
  providedIn: 'root'
})
export class PopupModalService {

  constructor( public dialog: MatDialog) {}

  /***********************************************************************************
    Dialogos Popup
  ********************************************/
  /* Funcao generica para criar e apresentar o dialogo popup */
  openDialog(popup: any, modelData: any, widthF?: string): Observable<any> {
    if ( (widthF === undefined ) || (widthF === null) ) {
      widthF = '300px';
    }
    const dialogRef = this.dialog.open(popup, { width: widthF, data: modelData });

    return dialogRef.afterClosed();
  }

  /* Cria e apresenta o dialogo generico */
  dialogoGenerico(titulo: string, mensagem: string, msgBotaoYes?: string ): Observable<boolean> {
    if (msgBotaoYes === undefined) {
      msgBotaoYes = 'Ok';
    }

    return this.openDialog(GenericConfirmComponent, {
      titleBox: titulo, message: mensagem, buttonYesText: msgBotaoYes
    }) as Observable<boolean>;
  }
}
