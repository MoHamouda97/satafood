import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { validations } from 'src/app/helper/validations';
import { AreasService } from 'src/services/areas/areas.service';
import { BranchesZonesService } from 'src/services/BranchesZones/branches-zones.service';
import { restaurant_areas } from 'src/services/restaurants/RestaurantModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

 zonesList
  BranchZones = new restaurant_areas()
  constructor(private Areasservice:AreasService,private location: Location,private service:BranchesZonesService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    var resId =  this.activatedRoute.snapshot.paramMap.get('id');

this.BranchZones.branch_id = parseInt(resId)
const data = await this.Areasservice.getAreaList();
this.zonesList = data
  }
  async add() {

      const data = await this.service.add({"data":this.BranchZones});
      this.location.back()

  }

}
