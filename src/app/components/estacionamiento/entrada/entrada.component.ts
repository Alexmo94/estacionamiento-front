import { Component, OnInit } from '@angular/core';
import { EstacionamientoService } from '../../../services/estacionamiento/estacionamiento.service';
import { VehiculoService } from '../../../services/vehiculo/vehiculo.service';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/modelo/Vehiculo';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { TipoService } from 'src/app/services/tipo/tipo.service';
import { Tipo } from 'src/app/modelo/Tipo';
import { Estacionamiento } from 'src/app/modelo/Estacionamiento';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.sass']
})
export class EntradaComponent implements OnInit {

  vehiculo: Vehiculo;
  usuario: Usuario;
  tipo: Tipo;
  estacionamiento: Estacionamiento;
  placaVehiculo: string;
  validaInfo = false;
  constructor(private estacionamientoService: EstacionamientoService, private vehiculoService: VehiculoService,
              private usuarioService: UsuarioService, private tipoService: TipoService, private router: Router) { }

  ngOnInit() {
  }

  buscarVehiculo() {
    this.placaVehiculo = (document.querySelector('#lblPlacaVehiculo') as HTMLInputElement).value;
    this.vehiculoService.consultarVehiculoPorPlaca(this.placaVehiculo).subscribe(
      data => {
        this.vehiculo = data;
        this.buscarUsuario(this.vehiculo.userId);
        this.buscarTipo(this.vehiculo.tipoId);
      },
      error => {
        alert('El Vehiculo No Existe');
      }
    );
  }

  buscarUsuario(userId: number) {
    this.usuarioService.consultarUsuarioPorId(userId).subscribe(
      data => {
        this.usuario = data;
      },
      error => {
        alert('El Usuario No Existe');
      }
    );
  }

  buscarTipo(tipoId: number) {
    this.tipoService.buscarTipoPorId(tipoId).subscribe(
      data => {
        this.tipo = data;
        this.validaInfo = true;
      },
      error => {
        alert('El Tipo No Existe');
      }
    );
  }

  ingresarVehiculoEstacionamiento() {
    this.estacionamientoService.ingresarVehiculoEstacionamiento(this.vehiculo).subscribe(
      data => {
        this.estacionamiento = data;
        alert('Vehiculo estacionado con exito. Fecha de Ingreso : ' + this.estacionamiento.parkingfechaSalida);
        this.router.navigate(['listar']);
      },
      error => {
        alert('Error al ingresar el vehiculo al estaciionamiento');
      }
    );
  }

}
