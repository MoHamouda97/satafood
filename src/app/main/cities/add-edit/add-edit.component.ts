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

    // this.pizza.name = "hossam"
    // console.log(this.pizza)
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    //   towns: this.fb.array([]),
    // });
    this.addTown();
    //this.addArea();
    console.log(this.form.value)     
    console.log(this.form.get('towns').get('areas'))     
  }

  //#region // create towns array
  public get getTowns() : FormArray {
    return this.form.get('towns') as FormArray;
  }

  addTown() {
    //const id = this.itemID;
   
  }

  removeTown(i: number) {
    if (this.getTowns.length > 1) {
      this.getTowns.removeAt(i);
    }
  }
  //#endregion

  //#region // create areas array
  public get getAreas() : FormArray {
    return this.form.get('towns').get('areas') as FormArray;
  }

  addArea() {
    //const id = this.itemID;
    this.getAreas.push(this.fb.group({
      name: ['', Validators.required],
    }))
  }

  removeArea(i: number) {
    if (this.getTowns.length > 1) {
      this.getAreas.removeAt(i);
    }
  }
  //#endregion

  addtowns(){
    this.townsArray.push(new TownsCreate())
console.log(this.townsArray)
  }

  //#region // add new city
  async add() {
    this.CitiesObject.name = this.cityname
    this.CitiesObject.name_en = this.cityname_en
    this.CitiesObject.photo = this.cityname_en

    var create = new Towns()
    create.create = this.townsArray
    this.CitiesObject.towns = create
console.log(JSON.stringify(this.CitiesObject))
    this.isAdd = true;
    const data = await this.service.add({"data":this.CitiesObject});
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
  }  
  //#endregion

}
