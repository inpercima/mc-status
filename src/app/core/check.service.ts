import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';
import { Status } from './status.model';

@Injectable({
  providedIn: 'root',
})
export class CheckService {

  //#region Injections
  private http = inject(HttpClient);
  //#endregion

  check(serverAddress: string): Observable<Status> {
    return this.http.get<Status>(`https://api.mcsrvstat.us/2/${serverAddress}`);
  }
}
