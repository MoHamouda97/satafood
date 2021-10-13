import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from 'src/app/options';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  add(data: any) {
<<<<<<< HEAD

    return this.http.post(`${environment.endpoint}/Cities/add`, data,options).toPromise();
=======
    return this.http.post(`${environment.endpoint}/Cities/add`, data).toPromise();

    //hossam s asd
>>>>>>> 6f5bb8cc1d68149b1fcbf1e29a251161b9e4c9c7
  }
}
