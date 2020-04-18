import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get("http://api.covid19api.com/country/sweden")
  }
}