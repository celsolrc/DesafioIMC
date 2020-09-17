import { PesoAlturaModel } from './../models/pesoAlturaModel';
import { ResultModel } from './../models/resultModel';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImcService {

  protected readonly API = environment.apiUrl;

  protected APIController = 'analise';

  constructor(private http: HttpClient) {
  }

  getAnalise(pesoAltura: PesoAlturaModel): Observable<ResultModel> {
    return this.http.get<ResultModel>(
        `${this.API}${this.APIController}?peso=${pesoAltura.peso}&altura=${pesoAltura.altura * 100}`)
    .pipe( tap(console.log));
  }
}
