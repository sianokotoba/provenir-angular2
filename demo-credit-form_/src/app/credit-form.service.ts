import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreditFormService {

  // private url = `https://wsc7b9d4b-dev.provenirdev.rocks/ProvWeb/ezapi/EZApiDEGroupCreditApp/CreditAppprocess1555594720248`;
  private url = `ProvWeb/ezapi/EZApiDEGroupCreditApp/CreditAppprocess1555594720248`;

  constructor(private httpClient: HttpClient) { }

  submit(body: any): Observable<any> {
    return this.httpClient.post(this.url, body);
  }

}
