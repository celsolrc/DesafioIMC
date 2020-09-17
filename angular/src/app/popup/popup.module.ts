import { PopupModalService } from './popup-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from '../angular-material.module';

import { GenericConfirmComponent } from './generic-confirm/generic-confirm.component';

@NgModule({
  declarations: [
    GenericConfirmComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [PopupModalService],
})

export class PopupModule { }
