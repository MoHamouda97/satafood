import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/services/areas/areas.service';
import { AreasCreate, TownsCreate } from 'src/services/cities/citiesModel';

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
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
