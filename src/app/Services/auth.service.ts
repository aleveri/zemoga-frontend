import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { DataService } from '../Services/data.service';


@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: '3UEzqbimeNaD9cJOGHPzIvvNoRBPmzkJ',
    domain: 'contarerpdev.au.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router,
    private data: DataService) { }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.router.navigate(['dashboard']);
      } else if (err) {
        this.router.navigate(['home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    this.data.accessToken = authResult.accessToken;
    this.data.scopes = authResult.scope;
    this.data.tokenId = authResult.idToken;
    this.data.userId = authResult.idTokenPayload.sub;
    this.data.expiresAt = expiresAt;
  }

  public logout(): void {
    this.data.clean();
    this.router.navigate(['home']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}