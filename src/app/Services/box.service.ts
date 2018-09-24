import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppConfiguracion } from '../app.configuracion';
import { Vote } from '../Models/Vote';

@Injectable()
export class BoxService {

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) { }

  list(params: any[]) {
    return this.http.get(`${AppConfiguracion.API_URL_2}/list`, {
      params: new HttpParams().append('page', params[0]).append('size', params[1]),
      headers: this.appConfiguracion.getHeader()
    });
  }

  create(param: Vote) {
    return this.http.post(`${AppConfiguracion.API_URL_2}/save`, param, {
      headers: this.appConfiguracion.getHeader()
    })
  }

  count(param: any) {
    return this.http.get(`${AppConfiguracion.API_URL_2}/votesPerUser`, {
      params: new HttpParams().append('userId', param),
      headers: this.appConfiguracion.getHeader()
    });
  }
}
