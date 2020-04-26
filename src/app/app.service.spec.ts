import { TestBed, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

describe('AppService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should return array of teams',
    inject([AppService], (service: AppService, done: DoneFn) => {
      service.getTeams().subscribe(teams => {
        expect(teams).toBeTruthy();
        done();
      });
    })
    );

    it('should return array of members',
    inject([AppService], (service: AppService, done: DoneFn) => {
      service.getMembers().subscribe(members => {
        expect(members).toBeTruthy();
        done();
      });
    })
    );
});
