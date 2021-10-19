import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { validations } from 'src/app/helper/validations';
import { working_times } from 'src/services/restaurants/RestaurantModel';
import { WorkingTimesService } from 'src/services/workingtimes/working-times.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  times = new working_times();

  constructor(private service:WorkingTimesService, private location:Location,private navigate: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    var resId =  this.activatedRoute.snapshot.paramMap.get('id');

this.times.branchId = parseInt(resId)
  }
  async add() {
    if (new validations(document).vlidate()){

      const data = await this.service.add({"data":this.times});
      this.location.back()
    }
  }

  
}
