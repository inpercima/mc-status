import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor(private http: HttpClient) { }

  check(): Observable<any> {
    return this.http.get<any>('https://api.mcsrvstat.us/2/85.215.92.234');
  }
}
