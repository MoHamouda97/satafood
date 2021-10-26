import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { options } from 'src/app/options';
import { OfferModel } from './OffersModel';


@Injectable({
  providedIn: 'root'
})
export class OffersService {

  constructor(private http: HttpClient) { }

  GetOffer() {

    return this.http.get<Array<OfferModel>>(`${environment.endpoint}/home/getOffers`).toPromise();

  }
}
