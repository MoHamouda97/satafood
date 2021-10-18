import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BindingService } from 'src/services/binding/binding.service';
import { MenuCategories, MenuItems } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import { MinMenuService } from 'src/services/min-menu/min-menu.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isLoadingTwo = false;
  active = false;
  MenuCat :  MenuCategories[] =  [];
  MenuItem :  MenuItems[] =  [];
  
  showaddcat = false
   URL = environment.photoPath;
CatId = 0
RestId;
  constructor(private service :MinMenuService,private generic: GenericService,private binding:BindingService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getTownsList()
    this.binding.checkIsHasTitle.subscribe(
      res => {
console.log(res)
if(res == true) {
  this.getTownsList()


}else {
  this.showaddcat =  false
}
      })
  }
  async getTownsList() {   
     this.RestId = this.activatedRoute.snapshot.paramMap.get('id');

    const data = await this.service.getMenuCategories(this.RestId);
    this.MenuCat = data


    console.log(this.MenuCat)
  } 
  loadTwo() {
    

    this.showaddcat = true
  }
  async chooseCategory(i){
  this.active = !this.active
  this.CatId = this.MenuCat[i].id
  this.MenuCat[i].active = this.active
  const data = await this.service.getItemsByCategories(this.MenuCat[i].id);
  this.MenuItem = data
}
SwitchToAddTopic(){
if (this.CatId != 0){
  this.navigate.navigate(['/mainmenu/add/'+this.CatId+'/'+this.RestId]);      
}else {
  this.generic.showNotification('error', "خطأ", "قم باختيار قسم الطبق اولا")

}
}
}
 