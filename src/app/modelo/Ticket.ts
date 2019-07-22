import { Estacionamiento } from './Estacionamiento';
import { Usuario } from './Usuario';
import { Vehiculo } from './Vehiculo';

export class Ticket {
    usuario: Usuario;
    estacionamiento: Estacionamiento;
    vehiculo: Vehiculo;
}
