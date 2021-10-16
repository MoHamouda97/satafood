import { Component, OnInit } from '@angular/core';
import { validations } from 'src/app/helper/validations';
import { CitiesData } from 'src/services/cities/citiesModel';
import { CuisinesService } from 'src/services/cuisines/cuisines.service';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  image:File;
  CitiesObject = new CitiesData();
  loading: boolean;

  constructor(private service :CuisinesService,private generic: GenericService) { }

  ngOnInit() {
  }
  Chooseimage($event) {
    console.log($event.target.files[0])
    this.image =  $event.target.files[0]
      }

      async add() {
        if (new validations(document).vlidate()){
            this.loading = true
            var formData: any = new FormData();
            formData.append("data", JSON.stringify(this.CitiesObject));
            formData.append("img", this.image);
        const data = await this.service.add(formData);
        this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
          }  
        else {
          this.generic.showNotification('error', lang.ar.validateerror, lang.ar.validateerror)
        
        }
          //#endregion
        
          }
}
