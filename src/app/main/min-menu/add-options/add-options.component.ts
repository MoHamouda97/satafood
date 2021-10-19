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
status = 0
  topicsarray :  MenuItemsTopics[] =  [];
  constructor() { }

  ngOnInit() {

  }

  addoOptions(i){
    this.topicsarray[i].menu_options.create.push(new MenuOption())

  }

  addTopic(){
    var newarr = new MenuItemsTopics()
    newarr.required = this.status
    newarr.price = 0
    newarr.menu_options = new Towns()
    newarr.menu_options.create = new Array()
    this.topicsarray.push(newarr)

  }
}
