import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from '../../modelo/Ticket';
import { Estacionamiento } from 'src/app/modelo/Estacionamiento';
import { Vehiculo } from 'src/app/modelo/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class EstacionamientoService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8083/estacionamiento/api/estacionamiento';

  getTickets() {
    return this.http.get<Ticket[]>(this.Url);
  }

  ingresarVehiculoEstacionamiento(vehiculo: Vehiculo) {
    return this.http.post<Estacionamiento>(this.Url + '/entrada', vehiculo);
  }

  registrarSalidaEstacionamiento(vehiculoPlaca: string) {
    return this.http.patch<Ticket>(this.Url + '/salida/' + vehiculoPlaca, null);
  }
}
