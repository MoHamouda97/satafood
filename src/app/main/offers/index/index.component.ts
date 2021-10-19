import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/services/areas/areas.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class AreasComponent implements OnInit {
  AreaData ;
  heads = ["الاسم","الاسم بالانجليزي","المنطقة الرئيسية"]
   constructor(private service:AreasService) { }
 
   async ngOnInit() {
     const data = await this.service.getAreaList()
     console.log(data)
     this.AreaData = data
    }
  }
