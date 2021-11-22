import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';
import { DashboardService } from 'src/services/dashboard/dashboard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private service: DashboardService,
    private message: NzMessageService, 
    private router: Router) {}

    loginform = true;
    recoverform = false;
    loginForm: FormGroup;
    loader = false;
    data;  

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  login(f) {
    const {...obj} = f.form.value;
    const returnUrl = localStorage.getItem('returnUrl') || '/dashboard/dashboard1';
    const CompanyUrl =  '/dashboard/dashboard1'; 

    this.loader = true;
    
    this.service.login(obj).subscribe(res => {
      if (res) {
        this.data = res;
        console.log(this.data)
        localStorage.setItem('token', this.data.token);
        localStorage.setItem('user_id', this.data.user.id);
        localStorage.setItem('username', this.data.user.username);
        localStorage.setItem('RestaurantId', this.data.user.restaurants.id);

        
        this.message.info('تمت عملية تسجيل الدخول بنجاح');  

        if (this.data.user.id != 1 ) {
          this.router.navigate([CompanyUrl]);
        } else {
          this.router.navigate([returnUrl]);
        }
        
        localStorage.removeItem('returnUrl');

      } else {
        this.message.error('اسم المستخدم او كلمة المرور خاطئة');
      }      
    },
    err => {console.log(err)}
    );     
  }

}
