import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { validations } from 'src/app/helper/validations';
import { MenuItems } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import { MinMenuService } from 'src/services/min-menu/min-menu.service';
import { AddOptionsComponent } from '../add-options/add-options.component';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']


})
export class TabsComponent implements OnInit {
  MenuItem = new MenuItems();
  MenuCatId;
ItemId;
  @ViewChild(AddComponent,null) private myChild: AddComponent;
  @ViewChild(AddOptionsComponent,null) private AddOptionsComponent: AddOptionsComponent;
  selectedTabIndex = 0
  constructor(private service:MinMenuService, private navigate: Router, private activatedRoute: ActivatedRoute,private generic: GenericService ) { }

  ngOnInit() {
    this.MenuCatId = this.activatedRoute.snapshot.paramMap.get('id');

  }
  async save(){
    if (new validations(document).vlidate() && this.selectedTabIndex == 0){

      var formData: any = new FormData();
      this.myChild.MenuItem.menu_categories_id  =  1 //this.MenuCatId

formData.append("data", JSON.stringify(this.myChild.MenuItem));
formData.append("img", this.myChild.image);
const data = await this.service.addNewItemInMenu(formData)
if (data.id > 0) {
  this.ItemId = data.id
  this.selectedTabIndex = 1
  this.generic.showNotification('success', "تمت العملية", "تمت اضافة الطبق بنجاح")

}
    }else if (new validations(document).vlidate() && this.selectedTabIndex == 1) {
      console.log(this.AddOptionsComponent.topicsarray)
        this.AddOptionsComponent.topicsarray.forEach ( async (i) => { 

          const data =   await this.service.addNewOptionAndTopicInMenu({"data":this.AddOptionsComponent.topicsarray})
         if (data.id > 0) {
        
          this.generic.showNotification('success', "تمت العملية", "تمت اضافة الخيار بنجاح")
        
        }else {

          this.generic.showNotification('error', "يوجد خطأ", "حدث خطأ اثناء اضافة احد الخيارات")
return ;
        }
      })
      this.navigate.navigate(['/mainmenu/all']);      


    }
  }
  onTabChanged($event) {
    let clickedIndex = $event.index;
console.log(clickedIndex)

  }
}
