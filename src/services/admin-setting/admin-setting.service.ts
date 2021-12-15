import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Confirgration } from 'src/app/dashboards/dashboard1/store/ReportsModel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminSettingService {

  constructor(private http: HttpClient) { }
  getSettingList() {

    return this.http.get<Array<Confirgration>>(`${environment.endpoint}/orders/settings`).toPromise();

  }
  editettingList(data:Confirgration) {

    return this.http.post<number>(`${environment.endpoint}/orders/edit/${data.id}`,data).toPromise();

  }
}
