import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from 'src/app/modelo/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8083/estacionamiento/api/vehiculo';

  consultarVehiculoPorPlaca(vehiculoPlaca: string) {
    return this.http.get<Vehiculo>(this.Url + '/' + vehiculoPlaca);
  }

}
