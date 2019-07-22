import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ListarEstacionadosComponent } from './components/estacionamiento/listar-estacionados/listar-estacionados.component';
import { FormsModule } from '@angular/forms';
import { EstacionamientoService } from './services/estacionamiento/estacionamiento.service';
import { HttpClientModule } from '@angular/common/http';
import { EntradaComponent } from './components/estacionamiento/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEstacionadosComponent,
    EntradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EstacionamientoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
