import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SharedService } from '../../shared.service';
import { ApiService } from '../api.service';
import { SecureTokenRequest } from '../../../../../interfaces/src/lib/secure-token/secure-token-request.model';
import { environment } from '../../../../../login/src/environments/environment';
import { HEADERS, SERVICE_ENDPOINTS } from '../../../../../shared/src/lib/constants/constants';
import { Observable } from 'rxjs';
import { OPTION_VALUES } from '../../../../../shared/src/lib/constants/enumeration';

@Injectable({
  providedIn: 'root',
})

export class SecureTokenService extends ApiService {
  SkipInterceptorHeader = 'X-Skip-Interceptor';
  constructor(private http: HttpClient, private sharedService: SharedService) {
    super();
  }

  public login(loginModel: SecureTokenRequest): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set(HEADERS.ACCESS_CONTROL_ALLOW_ORIGIN,OPTION_VALUES.ACCESS_CONTROL_ALLOW_ORIGIN);
    headers = headers.set(HEADERS.ACCEPT, OPTION_VALUES.APPLICATION_JSON);
    headers = headers.set(HEADERS.CONTENT_TYPE, OPTION_VALUES.APPLICATION_JSON);
    headers = headers.set(this.SkipInterceptorHeader, 'true');
    return this.http.post(
      `${environment.apiUrl}${SERVICE_ENDPOINTS.SECURE_TOKEN}`,
      loginModel,
      this.getHttpOptions(headers)
    );
  }

  public logout(): void {
    localStorage.clear();
  }
}
