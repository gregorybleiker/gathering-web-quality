import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { WorldcupService } from '../worldcup';
import { BetsService } from './bets.service';

describe('BetsService', () => {
  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };
  const worldcupServiceMock = jest.fn();

  let service: BetsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BetsService,
        testEnvironmentProvider,
        { provide: WorldcupService, useValue: worldcupServiceMock }
      ]
    });

    service = TestBed.get(BetsService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
