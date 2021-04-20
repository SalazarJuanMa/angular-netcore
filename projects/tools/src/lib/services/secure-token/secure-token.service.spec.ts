import { TestBed } from '@angular/core/testing';

import { SecureTokenService } from './secure-token.service';
import { HttpClientModule } from '@angular/common/http';

describe('SecureTokenService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: SecureTokenService = TestBed.get(SecureTokenService);
    expect(service).toBeTruthy();
  });

  it('should call login method', () => {
    const service: SecureTokenService = TestBed.get(SecureTokenService);
    service.login({ UserName: 'pradheep', PassWord: 'password', Domain: 'network' });
    expect(service).toBeTruthy();
  });

  it('should call logout method', () => {
    const service: SecureTokenService = TestBed.get(SecureTokenService);
    localStorage.setItem('SecureToken', 'value');
    service.logout();
    expect(localStorage.getItem('SecureToken')).toBe(null);
  });
});
