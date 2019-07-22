import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarEstacionadosComponent } from './components/estacionamiento/listar-estacionados/listar-estacionados.component';
import { EntradaComponent } from './components/estacionamiento/entrada/entrada.component';

const routes: Routes = [
  {path: 'listar', component: ListarEstacionadosComponent},
  {path: 'estacionamiento/entrada', component: EntradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
