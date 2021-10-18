import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';
import { CategoriesService } from 'src/services/categories/categories.service';
import { branches, Restuarant } from 'src/services/restaurants/RestaurantModel';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  BranchObj = new Restuarant();
  zonesList
  image: any;

  constructor(private service:RestaurantsService,private Catservice:CategoriesService, private navigate: Router, private activatedRoute: ActivatedRoute,private generic: GenericService) { }

  async ngOnInit() {
    const data = await this.Catservice.getCategories();
    this.zonesList = data

  }
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
    this.image =  $event.target.files[0]

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
