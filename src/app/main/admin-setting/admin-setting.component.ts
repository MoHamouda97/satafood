import { Component, OnInit } from '@angular/core';
import { Confirgrations } from 'src/app/dashboards/dashboard1/store/ReportsModel';
import { AdminSettingService } from 'src/services/admin-setting/admin-setting.service';
import { GenericService } from 'src/services/generic/generic.service';
import { AdminSettingHelper } from './adminSettingHelpter';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {
  data: any[] = [];
  isLocationVisible: boolean;
  BranchObj = new Confirgrations();

  constructor(private helper: AdminSettingHelper,private service:AdminSettingService,private generic: GenericService) { }

  async ngOnInit() {
    const data = await this.service.getSettingList()
    console.log(data)
this.data = this.helper.shapeOrderObject(data)

  }
  editLocation(i){
    // e.stopPropagation();
 this.BranchObj = this.data[i]
     this.isLocationVisible = true;
   }
   handleCancel(){
     this.isLocationVisible = false;
   } 
   async editClickable(){
   var data = await  this.service.editettingList(this.BranchObj)
   if (data == 1) {
    this.isLocationVisible = false;
    this.generic.showNotification('success', "تم التعديل بنجاح",  "تم التعديل بنجاح")
   }
   }
}
