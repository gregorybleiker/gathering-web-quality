import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RankingsService } from './rankings.service';
import { rankings } from './test.support';

describe('RankingsService', () => {
  const testEnvironmentProvider = { provide: 'baseUrl', useValue: 'http://localhost:3000' };

  let service: RankingsService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RankingsService, testEnvironmentProvider]
    });

    service = TestBed.get(RankingsService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should get all rankings from API backend', () => {
    service.getAll().subscribe(result => {
      expect(result.length).toBe(3);
    });

    const response = http.expectOne('http://localhost:3000/rankings');
    expect(response.request.method).toEqual('GET');

    response.flush(rankings);
  });
});
