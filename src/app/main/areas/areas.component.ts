import { Component, OnInit } from '@angular/core';
import { AreasService } from 'src/services/areas/areas.service';
import { AreasCreate } from 'src/services/cities/citiesModel';

@Component({
  selector: 'areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {
 AreaData = new AreasCreate();
 heads = ["الاسم","الاسم بالانجليزي"]
  constructor(private service:AreasService) { }

  async ngOnInit() {
    const data = await this.service.GetArea()
    console.log(data)
    this.AreaData = data
  }

}
