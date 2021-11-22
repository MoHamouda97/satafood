import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private notification: NzNotificationService) {    
}

  canActivate(route, state: RouterStateSnapshot) {

    if(localStorage.getItem('token') != "null") {

      return true;
  }
        else {

    this.notification.warning(
      'تسجيل دخول', 
      'يجب عليك تسجيل الدخول لادارة المنصة'
    );
    this.router.navigate(['/authentication/login'], {queryParams: {returnUrl: state.url}});
    localStorage.setItem('returnUrl', state.url);

    return false;
  }
}
}
