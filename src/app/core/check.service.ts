import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';

import { Status } from './status.model';

@Injectable({
  providedIn: 'root',
})
export class CheckService {
  private address = signal<string>('');

  private mcStatusResource: HttpResourceRef<Status | undefined> = httpResource<Status>(() => {
    if (!this.address()) return undefined;
    return `https://api.mcsrvstat.us/2/${this.address()}`;
  });

  mcStatus = this.mcStatusResource.value;
  isLoading = this.mcStatusResource.isLoading;

  setAddress(address: string): void {
    this.address.set(address);
  }
}
