import { environment } from './../environments/environment';
import { IpAddress } from './ip-address';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpTrackerService {

  constructor(private http: HttpClient) { }

  getAddressByIp(ipAdress: string): Observable<IpAddress>{
    const options = new HttpParams()
      .set('ipAddress', ipAdress)
      .set('apiKey', environment.api_key);

    return this.http.get<IpAddress>(environment.api_url + 'country,city', {params: options});
  }

}
