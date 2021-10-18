import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BindingService } from 'src/services/binding/binding.service';
import { MenuCategories } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import { MinMenuService } from 'src/services/min-menu/min-menu.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent implements OnInit {
  @Input() Show  = true; 
CateData = new MenuCategories();
RestId = 0;
  constructor(private activatedRoute:ActivatedRoute,private service:MinMenuService,private generic: GenericService,private binding:BindingService) { }

  ngOnInit() {
    this.RestId = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
  }
  handleCancel(){

    this.Show = false
    this.binding.changeTitle(false)

  }
  async save(){
this.CateData.restaurant_id = this.RestId
const data = await this.service.addCategoryMenu({"data":this.CateData})
if (data.id != null) {
  this.Show = false
  this.generic.showNotification('success', "تمت العملية", "تمت اضافة القسم بنجاح")

  this.binding.changeTitle(true)
}
  }
}
