import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchesService } from 'src/services/branches/branches.service';
import { GenericService } from 'src/services/generic/generic.service';
import { branches } from 'src/services/restaurants/RestaurantModel';
import * as lang from './../../../../settings/lang';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  resId;
  BranchObj = new branches();
  geocoder =  new google.maps.Geocoder()

  lat = 0;
  lng = 0;
  zoom = 15;
  mapindex = 0
  selectedArea = 0
    isAdd: boolean;
    @ViewChild('map3', { static: true }) map3;
  ArrayAreas: any;
  isLocationVisible: boolean;
  
  constructor(private service:BranchesService,private location: Location, private navigate: Router, private activatedRoute: ActivatedRoute,private generic: GenericService) { }

  ngOnInit() {

    this.resId =  this.activatedRoute.snapshot.paramMap.get('id');
this.BranchObj.restaurantsId = parseInt(this.resId)
  }


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
      this.BranchObj.latitude =  this.lat
      this.BranchObj.longitude =  this.lng

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

  async add(){

    console.log(this.ArrayAreas)

    //if (new validations(document).vlidate()){

      const data = await this.service.add({"data":this.BranchObj});
      this.generic.showNotification('success', lang.ar.addNewTitle, lang.ar.addNewMsg)
      this.location.back()
    }  
}
