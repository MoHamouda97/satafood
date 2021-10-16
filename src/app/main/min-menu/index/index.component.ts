import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MenuCategories, MenuItems } from 'src/services/cities/citiesModel';
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

  constructor(private service :MinMenuService) { }

  ngOnInit() {
    this.getTownsList()
  }
  async getTownsList() {    
    const data = await this.service.getMenuCategories(1);
    this.MenuCat = data


    console.log(this.MenuCat)
  } 
  loadTwo() {
    

    this.showaddcat = true
  }
  async chooseCategory(i){
  this.active = !this.active

  const data = await this.service.getItemsByCategories(this.MenuCat[i].id);
  this.MenuItem = data
}
}
