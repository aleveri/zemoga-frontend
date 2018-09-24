import { Injectable } from '@angular/core';
import { AppConfiguracion } from '../app.configuracion';
import { HttpParams, HttpClient } from '@angular/common/http';
import { User } from '../Models/User';

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) { }

  list(params: any[]) {
    return this.http.get(`${AppConfiguracion.API_URL}/list`, {
      params: new HttpParams().append('page', params[0]).append('size', params[1]),
      headers: this.appConfiguracion.getHeader()
    });
  }

  find(param: string) {
    return this.http.get(`${AppConfiguracion.API_URL}/find`, {
      params: new HttpParams().append('id', param),
      headers: this.appConfiguracion.getHeader()
    });
  }

  create(param: User) {
    return this.http.post(`${AppConfiguracion.API_URL}/save`, param, {
      headers: this.appConfiguracion.getHeader()
    })
  }

  update(param: User) {
    return this.http.put(`${AppConfiguracion.API_URL}/update`, param, {
      headers: this.appConfiguracion.getHeader()
    })
  }

}
