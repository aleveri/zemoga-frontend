import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './Services/data.service';

@Injectable()
export class AppConfiguracion {

    static API_URL = 'http://localhost:5000';
    static API_URL_2 = 'http://localhost:7000';
    static CALLBACK = 'http://localhost:3000/callback';
    
    constructor(private dataService: DataService) { }

    getHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        headers = headers.set('Authorization', 'Bearer ' + this.dataService.tokenId);
        return headers;
    }

    getAuthHeader(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json');
        return headers;
    }
}