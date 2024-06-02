import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CheckService } from './check.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CheckService', () => {
  let service: CheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(CheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
