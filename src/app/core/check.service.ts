import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Status } from './status.model';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  constructor(private http: HttpClient) {}

  check(serverAddress: string): Observable<Status> {
    return this.http.get<Status>(`https://api.mcsrvstat.us/2/${serverAddress}`);
  }
}
