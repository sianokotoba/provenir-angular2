import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Coffee } from './coffee';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoffeeService {
  private coffeeURL = 'api/coffees';
  private headers = new Headers({'Content-Type': 'application/json'});

  private endpoint = `https://wsc7b9d4b-dev.provenirdev.rocks/ProvWeb/ezapi/EZApiDEGroupCreditApp/CreditAppprocess1555594720248`;

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCoffees(): Promise<Coffee[]> {
    return this.http.get(this.coffeeURL)
      .toPromise()
      .then(response => response.json().data as Coffee[])
      .catch(this.handleError);
  }

  update(coffee: Coffee): Promise<Coffee> {
    const url = `${this.coffeeURL}/${coffee.id}`;
    return this.http
      .put(url, JSON.stringify(coffee), {headers: this.headers})
      .toPromise()
      .then(() => coffee as Coffee)
      .catch(this.handleError);
  }

  create(newCoffee: any): Promise<Coffee> {
    return this.http
      .post(this.coffeeURL, JSON.stringify(newCoffee), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Coffee)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.coffeeURL}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  postToEndpoint(formData: any): Observable<any> {
    console.log("POST TO ENdOOINT", formData)
    let headers1 = new Headers({ 'Accept': 'application/json','Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers1 });
    return this.http.post(this.endpoint, formData, options);
  }
}
