import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { RequestToken } from '../Models/RequestToken';
import { AppConfiguracion } from '../app.configuracion';

@Injectable()
export class TokenService {

  param: RequestToken;

  constructor(private http: HttpClient,
    private appConfiguracion: AppConfiguracion) {
    this.param = new RequestToken();
  }

  fraudeToken() {
    this.param.client_id = "qimHTGbDXyHlALYMi9g0mdLjRof5UB2u";
    this.param.client_secret = "B_QC4tmBI571OyDb46EO7qKcEOMHnQfakYN8rEaz7WEXILrYgipsDkuFOQogMni8";
    this.param.audience = "Seguro-Fraude";
    this.param.grant_type = "client_credentials";
    return this.http.post('https://marketplace-admin.au.auth0.com/oauth/token', this.param, {
      headers: this.appConfiguracion.getAuthHeader()
    });
  }
}
