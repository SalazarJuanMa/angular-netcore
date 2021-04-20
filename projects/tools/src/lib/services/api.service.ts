import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  public getHttpOptions(headers: HttpHeaders) {
    type bodyType = 'body';
    const httpOptions = {
      headers: headers,
      observe: <bodyType>'response',
    };
    return httpOptions;
  }
}
