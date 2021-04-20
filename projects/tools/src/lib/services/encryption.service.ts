import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../../login/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EncryptionService {
  constructor() {}

  public encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, environment.encKey.trim()).toString();
  }

  public decrypt(textToDecrypt: string): string {
    return CryptoJS.AES.decrypt(textToDecrypt, environment.encKey.trim()).toString(
      CryptoJS.enc.Utf8
    );
  }
}
