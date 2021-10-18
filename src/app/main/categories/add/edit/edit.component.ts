import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/services/categories/categories.service';
import { MenuCategories } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../../settings/lang';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export  class EditComponent implements OnInit {
  image: any;
CatObject = new MenuCategories()
  constructor(private service:CategoriesService,private generic: GenericService) { }

  ngOnInit() {
  }


  Chooseimage($event) {
    console.log($event.target.files[0])
    this.image =  $event.target.files[0]
      }
      async add() {
           
        
        var formData: any = new FormData();
        formData.append("data", JSON.stringify(this.CatObject));
        formData.append("img", this.image);
           
            const data = await this.service.add(formData);
            this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
      
}
}

