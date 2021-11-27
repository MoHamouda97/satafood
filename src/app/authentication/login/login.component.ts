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
    const returnUrl = localStorage.getItem('returnUrl') || '/restaurants/all';
    const CompanyUrl =  '/dashboard/dashboard1'; 

    this.loader = true;
    
    this.service.login(obj).subscribe(res => {
      if (res) {
        this.data = res;
        console.log(localStorage.getItem("RestaurantId"))
        localStorage.setItem('token', this.data.token);
        localStorage.setItem('user_id', this.data.user.id);
        localStorage.setItem('username', this.data.user.username);
        localStorage.setItem('RestaurantId', this.data.user.restaurants != null ? this.data.user.restaurants.id : null );
        localStorage.setItem('RestaurantName', this.data.user.restaurants != null ? this.data.user.restaurants.name : null );
        localStorage.setItem('RestaurantLogo', this.data.user.restaurants != null ? this.data.user.restaurants.logo : null );

        
        this.message.info('تمت عملية تسجيل الدخول بنجاح');  

        if (this.data.user.user_group_id == 2 ) {
          this.router.navigate([CompanyUrl]);
        } else {
          this.router.navigate(['/restaurants/all']);
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
