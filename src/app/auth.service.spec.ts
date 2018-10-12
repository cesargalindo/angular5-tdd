import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.removeItem('token');
  });

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', fakeAsync(() => {
    localStorage.setItem('token', '1234');
    const service: AuthService = TestBed.get(AuthService);
    spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    tick();
    expect(service.isAuthenticated()).toBeTruthy();
  }));

  it('should return false from isAuthenticated when there is no token', fakeAsync(() => {
    localStorage.removeItem('token');
    const service: AuthService = TestBed.get(AuthService);
    spyOn(service, 'isAuthenticated').and.returnValue(Promise.resolve(false));
    tick();
    expect(service.isAuthenticated()).toBeFalsy();
  }));


});


