import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private data: any = undefined;
  public accessToken: any;
  public tokenId: any;
  public expiresAt: any;
  public userId: any;
  public scopes: string[];
  public verified: boolean;

  constructor() { }

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }

  clean() {
    this.accessToken = null;
    this.tokenId = null;
    this.expiresAt = null;
    this.scopes = null;
  }
}
