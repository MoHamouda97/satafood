import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CuisinesService {

  constructor(private http: HttpClient) { }

  add(data: any) {

    return this.http.post(`${environment.endpoint}/Restaurant/addCusines`, data,options).toPromise();

  }
}
