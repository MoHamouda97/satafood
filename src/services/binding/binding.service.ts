import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BindingService {

  constructor() { }

  private isHasTitle = new BehaviorSubject<boolean> (null);
  checkIsHasTitle = this.isHasTitle.asObservable();

  changeTitle(isHasTitle) {
    this.isHasTitle.next(isHasTitle);
  }
  
}
