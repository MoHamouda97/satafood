import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericService } from 'src/services/generic/generic.service';
import { RestaurantsService } from 'src/services/restaurants/restaurants.service';
import { CategoriesService } from 'src/services/categories/categories.service';
import { branches, Restuarant, Users } from 'src/services/restaurants/RestaurantModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  BranchObj = new Restuarant();
  User = new Users();

  zonesList
  image: any;
  logo: any;
  attachment : any  ;

  URL = environment.photoPath;
  constructor(private service:RestaurantsService,private Catservice:CategoriesService, private navigate: Router, private activatedRoute: ActivatedRoute,private generic: GenericService) { }

  async ngOnInit() {
    const data = await this.Catservice.getCategories();
    this.zonesList = data
    console.log(this.BranchObj.cover)

    console.log(window.history.state)
  if ( window.history.state.id)
    this.BranchObj = window.history.state
    delete  this.BranchObj.navigationId 
  }
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
    this.image =  $event.target.files[0]

}
uploadLogoFile($event) {
  console.log($event.target.files[0]); // outputs the first file
  this.logo =  $event.target.files[0]

}
uploadAttahcmentFile($event) {
  console.log($event.target.files[0]); // outputs the first file
  this.attachment =  $event.target.files

}
  async add(){

    
    //if (new validations(document).vlidate()){
console.log(this.attachment)
      var formData: any = new FormData();
formData.append("data", JSON.stringify(this.BranchObj));
formData.append("user", JSON.stringify(this.User));

formData.append("img", this.image != undefined ? this.image : this.BranchObj.cover);
formData.append("logo", this.logo != undefined ? this.logo : this.BranchObj.logo);

for ( let index = 0; index < this.attachment.length; index++) {
   formData.append("attachment",this.attachment[index]);
}

      const data = await this.service.add(formData);
      if (data.id > 0) {
        this.generic.showNotification('success', "تم الاضافة بنجاح",  "تم الاضافة بنجاح")

      }else {
        this.generic.showNotification('error', "لم يتم التسجيل","لم يتم التسجيل")


      }
    }  
}
