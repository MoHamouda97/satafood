import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { working_times } from 'src/services/restaurants/RestaurantModel';
import { WorkingTimesService } from 'src/services/workingtimes/working-times.service';

@Component({
  selector: 'app-working-times',
  templateUrl: './working-times.component.html',
  styleUrls: ['./working-times.component.css']
})
export class WorkingTimesComponent implements OnInit {
  resId;
times = new working_times();
heads = ["اليوم","الفتح","الاغلاق","اليوم انجليزي"]
  constructor(private service:WorkingTimesService, private navigate: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
  this.resId =  this.activatedRoute.snapshot.paramMap.get('id');
     const data = await this.service.getBranchTimes(this.resId)
     this.times = data
   }
   SwitchToAdd(){
     this.navigate.navigate(['/branches/add/'+this.resId]);      
 
   }

}
