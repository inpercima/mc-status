import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { McStatusService } from './mc-status.service';

describe('McStatusService', () => {
  let service: McStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()],
    });
    service = TestBed.inject(McStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
