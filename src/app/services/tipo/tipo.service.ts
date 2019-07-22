import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from 'src/app/modelo/Tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8083/estacionamiento/api/tipo';

  buscarTipoPorId(tipoId: number) {
    return this.http.get<Tipo>(this.Url + '/' + tipoId);
  }

}
