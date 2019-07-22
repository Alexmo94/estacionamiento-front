import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'estacionamiento';

  constructor(private router: Router) { }

  listarVehiculosEstacionados() {
    this.router.navigate(['listar']);
  }

  ingresarVehiculoEstacionamiento() {
    this.router.navigate(['estacionamiento/entrada']);
  }

}
