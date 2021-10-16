import { Component, Injectable, OnInit } from '@angular/core';
import { MenuCategories, MenuItems } from 'src/services/cities/citiesModel';
import { MinMenuService } from 'src/services/min-menu/min-menu.service';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

MenuCat :  MenuCategories[] =  [];
MenuItem = new MenuItems();
  image: any;
  constructor(private service :MinMenuService) { }

  ngOnInit() {
    this.getTownsList()
  }
  async getTownsList() {    
    // const data = await this.service.getMenuCategories(1);
    // this.MenuCat = data
    console.log(this.MenuCat)
  } 
  uploadFile($event) {
    console.log($event.target.files[0]); // outputs the first file
    this.image =  $event.target.files[0]

}
}
