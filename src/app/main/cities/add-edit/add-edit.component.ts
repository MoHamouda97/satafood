import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from 'src/services/cities/cities.service';
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
  obj: any = {};

  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder, 
    private service: CitiesService, 
    private generic: GenericService) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      towns: this.fb.array([]),
    });
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
    this.getTowns.push(this.fb.group({
      name: ['', Validators.required],
      name_en: ['', Validators.required],
      areas: this.fb.array([]),
    }))
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

    

  //#region // add new city
  async add() {
    this.isAdd = true;
    const data = await this.service.add({});
    this.isAdd = false;
    this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
    this.form.reset();
  }  
  //#endregion

}
