import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from 'src/app/models/MenuModel';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

  export class IndexComponent implements OnInit {
 AreaData : CategoriesModel[] = [];
 heads = ["الاسم","الاسم بالانجليزي"]
 URL = environment.photoPath
  constructor(private service:CategoriesService) { }

  async ngOnInit() {
    const data = await this.service.getCategories()
    console.log(data)
    this.AreaData = data
  }

}
