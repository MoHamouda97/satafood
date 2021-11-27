import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from 'src/services/categories/categories.service';
import { GenericService } from 'src/services/generic/generic.service';
import { branches, Restuarant } from 'src/services/restaurants/RestaurantModel';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  BranchObj = new Restuarant();
  zonesList
  image: any;

  constructor(private service:RestaurantsService,private Catservice:CategoriesService, private navigate: Router, private activatedRoute: ActivatedRoute,private generic: GenericService) { }

  async ngOnInit() {
    const data = await this.Catservice.getCategories();
    this.zonesList = data

  }


  async add(){


    //if (new validations(document).vlidate()){

      var formData: any = new FormData();
      this.BranchObj.cover = "1"
formData.append("data", JSON.stringify(this.BranchObj));
formData.append("img", this.image);
      const data = await this.service.add(formData);
      this.generic.showNotification('success', "تم الاضافة بنجاح",  "تم الاضافة بنجاح")
    }  
}
