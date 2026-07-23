import { httpResource, HttpResourceRef } from '@angular/common/http';
import { Service, Signal, signal } from '@angular/core';
import { Status } from './models/status.model';

@Service()
export class McStatusService {
  readonly #address = signal<string>('');

  readonly #mcStatusResource: HttpResourceRef<Status | undefined> = httpResource<Status>(() => {
    if (!this.#address()) return undefined;
    return `https://api.mcsrvstat.us/2/${this.#address()}`;
  });

  setAddress(address: string): void {
    this.#address.set(address);
  }

  getStatus(): Signal<Status | undefined> {
    return this.#mcStatusResource.value;
  }

  isLoading(): Signal<boolean> {
    return this.#mcStatusResource.isLoading;
  }

  reloadResource(): void {
    this.#mcStatusResource.reload();
  }
}
