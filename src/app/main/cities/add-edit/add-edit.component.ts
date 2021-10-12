import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from 'src/services/cities/cities.service';
import { Cities, CitiesData, Towns, TownsCreate  } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean = false;
  isUpdate: boolean = false;
  cityname:string
  cityname_en:string
image:File;
loading = false

  obj: any = {};
   townObject = new TownsCreate();
   CitiesObject = new CitiesData();

   townsArray :  TownsCreate[] =  [];

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private service: CitiesService, 
    private generic: GenericService) {
     
     }

  ngOnInit() {

    this.townsArray.push(this.townObject)
console.log(this.CitiesObject.name)

  }

 

  removeTown(i: number) {
  
  }
  //#endregion

  //#region // create areas array
  public get getAreas() : FormArray {
    return this.form.get('towns').get('areas') as FormArray;
  }




  //#endregion
  Chooseimage($event) {
console.log($event.target.files[0])
this.image =  $event.target.files[0]
  }
  addtowns(){
    this.townsArray.push(new TownsCreate())
  }

  //#region // add new city
  async add() {
    const inputFeilds = document.querySelectorAll("input");

const validInputs = Array.from(inputFeilds).filter( input => input.value === "");
console.log(validInputs)
if (validInputs.length == 0){
    var newArray = this.townsArray.filter(value => JSON.stringify(value) !== '{}');
    this.loading = true
    var create = new Towns()
    create.create = newArray
    this.CitiesObject.towns = create

var formData: any = new FormData();
formData.append("data", JSON.stringify(this.CitiesObject));
formData.append("img", this.image);
    this.isAdd = true;
    const data = await this.service.add(formData);
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
  }  
else {
  this.generic.showNotification('error', lang.ar.validateerror, lang.ar.validateerror)

}
  //#endregion

  }
}
