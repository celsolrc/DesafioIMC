import { PopupModalService } from './popup/popup-modal.service';
import { PesoAlturaModel } from './models/pesoAlturaModel';
import { Component, Inject, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ImcService } from './services/imc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  public form: FormGroup;
  public formSubmitAttempt: boolean; // {2}

  resultadoTxt = '';
  erroResult = false;

  isOpen = true;

  constructor(private fb: FormBuilder,
              private imcService: ImcService,
              private popupModalService: PopupModalService) {  }

  ngOnInit(): void {
    this.form = this.fb.group({
      peso: [0, [Validators.required]],
      altura: [0, [Validators.required]]
    });
  }

  hasError(field: string): boolean {
    return ( this.form.get(field).errors !== null);
  }

  onSubmit(): void {
    if (this.form.valid) {
      const pesoAltura = {
          peso: this.form.get('peso').value,
          altura: this.form.get('altura').value
        } as PesoAlturaModel;

      this.imcService.getAnalise( pesoAltura ).subscribe( result => {

        if (!this.erroResult) {
          this.popupModalService.dialogoGenerico('Analise do IMC', result.result.descricao);
        }
      });

    }
    this.formSubmitAttempt = true;             // {8}
  }
}

