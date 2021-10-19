import { Component, OnInit } from '@angular/core';
import { CategoriesModel } from 'src/app/models/MenuModel';
import { environment } from 'src/environments/environment';
import { CategoriesService } from 'src/services/categories/categories.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {
  AreaData : CategoriesModel[] = [];
  heads = ["الاسم","الاسم بالانجليزي","الصورة"]
  URL = environment.photoPath
   constructor(private service:CategoriesService) { }
 
   async ngOnInit() {
     const data = await this.service.getCuisines()
     console.log(data)
     this.AreaData = data
   }
}
