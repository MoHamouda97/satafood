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
  times : working_times[];

  constructor(private service:WorkingTimesService, private location:Location,private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    var resId =  this.activatedRoute.snapshot.paramMap.get('id');
    const data = await this.service.getBranchTimes(resId);
    this.times = data
  }
  async add() {
    if (new validations(document).vlidate()){

      const data = await this.service.update(this.times);
      this.location.back()
    }
  }
copy(i:number){
   this.times.map((element, index) => {
    this.times[index].open_time = this.times[i].open_time
    this.times[index].close_time = this.times[i].close_time
  })
}
  
}
