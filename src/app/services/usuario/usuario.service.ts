import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8083/estacionamiento/api/usuario';

  consultarUsuarioPorId(usuarioId: number) {
    return this.http.get<Usuario>(this.Url + '/' + usuarioId);
  }

}
