import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { environment } from 'src/environments/environment';
import { Restuarant } from 'src/services/restaurants/RestaurantModel';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  restaurants :  Restuarant[] =  []
  URL = environment.photoPath;

  constructor(private notification: NzNotificationService,private service:RestaurantsService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    console.log(localStorage.getItem("RestaurantId") )
    if (localStorage.getItem("RestaurantId") == "null"){
      const data = await this.service.getRestaurant()
      this.restaurants = data

    }else {
      const data = await this.service.getMyRestaurant(localStorage.getItem("RestaurantId"))
      this.restaurants = data

    }
  }
  openLg(id,RestId){
    this.navigate.navigate(['/branches/all/'+RestId]);      
  }

  cancel(): void {
  }

edit(i){
  this.navigate.navigateByUrl("/restaurants/add", {
    state: this.restaurants[i],
    replaceUrl: true
 });
}
  async confirm(RestId): Promise<void> {
    const data = await this.service.delete({"id":RestId})
if (data != 1) {
  this.restaurants.forEach ((element , index) => {
    if(element.id == RestId)  {this.restaurants.splice(index,1)};;
  })
  console.log(this.restaurants)
  this.notification.error('error',data.toString())
}else {
  this.notification.success('Done',"تم المسح")
}
  }
}
