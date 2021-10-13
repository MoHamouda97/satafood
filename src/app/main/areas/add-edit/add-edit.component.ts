import { Component, OnInit, ViewChild } from '@angular/core';
import { validations } from 'src/app/helper/validations';
import { AreasService } from 'src/services/areas/areas.service';
import { AreasCreate } from 'src/services/cities/citiesModel';
import { GenericService } from 'src/services/generic/generic.service';
import * as lang from './../../../../settings/lang';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
Townlist;
CitiesObject = new AreasCreate();
ArrayAreas :  AreasCreate[] =  [];
isLocationVisible = false;
geocoder =  new google.maps.Geocoder()
lat = 0;
lng = 0;
zoom = 15;
mapindex = 0
selectedArea = 0
  isAdd: boolean;
  @ViewChild('map3', { static: true }) map3;

  constructor(private service :AreasService,private generic: GenericService) { }

  ngOnInit() {
    this.getTownsList()
  }
  async getTownsList() {    
    const data = await this.service.getTownsList();
    this.Townlist = data
    console.log(this.Townlist)
  }   
  addtowns(){
    var newarray = new AreasCreate()
    this.ArrayAreas.push(newarray)
    newarray.town_id = this.selectedArea

  }
  
  addnewArea($event) {
    this.selectedArea = $event 
    if(this.ArrayAreas.length == 0)
    this.ArrayAreas.push(this.CitiesObject)
    this.CitiesObject.town_id = $event;



      }
      async add(){

        console.log(this.ArrayAreas)

        //if (new validations(document).vlidate()){
          var newArray = this.ArrayAreas.filter(value => JSON.stringify(value) !== '{}');

          const data = await this.service.add({"data":newArray});
          this.isAdd = false;
          this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
        }  
      // else {
      //   this.generic.showNotification('error', lang.ar.validateerror, lang.ar.validateerror)
      
      // }
      //}
      markerDragEnd(m: any,i) {
        let lat = m.coords.lat;
        let lng = m.coords.lng;    
        this.geocoder.geocode({
          'location': {
            lat: lat,
            lng: lng
          }
        }, (result, status) => {
          localStorage.setItem('lat', result[0].geometry.location.lat().toString());
          localStorage.setItem('lng', result[0].geometry.location.lng().toString());   
          this.ArrayAreas[this.mapindex].latitude =  result[0].geometry.location.lat()
          this.ArrayAreas[this.mapindex].longitude = result[0].geometry.location.lng()
        })
      }
      
      changeAddress(event,i) {
        let address = event.target.value;
    
        this.geocoder.geocode({'address': address}, (result, status) => {
          this.lat = result[0].geometry.location.lat();
          this.lng = result[0].geometry.location.lng();
          this.ArrayAreas[this.mapindex].latitude =  this.lat
          this.ArrayAreas[this.mapindex].longitude =  this.lng

          localStorage.setItem('lat', this.lat.toString());
          localStorage.setItem('lng', this.lng.toString());      
        });
      }
      editLocation(e, i){
       // e.stopPropagation();
       this.mapindex = i
    
        this.isLocationVisible = true;
      }
      handleCancel(){
        this.isLocationVisible = false;
      } 
}
