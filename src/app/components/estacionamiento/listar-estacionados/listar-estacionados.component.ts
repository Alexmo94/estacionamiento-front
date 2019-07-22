import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstacionamientoService } from '../../../services/estacionamiento/estacionamiento.service';
import { Ticket } from 'src/app/modelo/Ticket';

@Component({
  selector: 'app-listar-estacionados',
  templateUrl: './listar-estacionados.component.html',
  styleUrls: ['./listar-estacionados.component.sass']
})
export class ListarEstacionadosComponent implements OnInit {

  tickets: Ticket[];
  ticketSalida: Ticket;
  constructor(private estacionamientoService: EstacionamientoService, private router: Router) { }

  ngOnInit() {
    this.estacionamientoService.getTickets().subscribe(
      data => {
        this.tickets = data;
      });
  }

  registrarSalidaEstacionamiento(vehiculoPlaca: string) {
    alert(vehiculoPlaca);
    this.estacionamientoService.registrarSalidaEstacionamiento(vehiculoPlaca).subscribe(
      data => {
        this.ticketSalida = data;
        alert('Ticket Generado Exitosamente. Fecha de salida' + this.ticketSalida.estacionamiento.parkingfechaSalida);
        this.ngOnInit();
      },
      error => {
        alert('Error al generar Ticket');
      }
    );
  }

}
