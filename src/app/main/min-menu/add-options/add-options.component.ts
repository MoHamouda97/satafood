import { Component, Input, OnInit } from '@angular/core';
import { MenuItemsTopics, MenuOption, Towns } from 'src/app/models/MenuModel';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.css']
})
export class AddOptionsComponent implements OnInit {
  @Input() ItemId  =  1; 
  Options = new MenuOption();
  Optionsarray :  MenuOption[] =  [];

  topicsarray :  MenuItemsTopics[] =  [];
  constructor() { }

  ngOnInit() {
    
  }

  addoOptions(i){
    this.topicsarray[i].menu_options.create.push(new MenuOption())

  }

  addTopic(){
    var newarr = new MenuItemsTopics()
    newarr.menu_categories_items = 1
    newarr.required = 1
    newarr.menu_topic_type_id = 1
    newarr.menu_options = new Towns()
    newarr.menu_options.create = new Array()
    this.topicsarray.push(newarr)

  }
}
