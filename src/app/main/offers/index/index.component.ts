import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AreasService } from 'src/services/areas/areas.service';
import { OffersService } from 'src/services/offers/offers.service';
import { OfferModel } from 'src/services/offers/OffersModel';


@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class OffersComponent implements OnInit {
  dataArray : OfferModel[] ;
  URL = environment.photoPath;

  heads = ["الاسم","الاسم بالانجليزي","المنطقة الرئيسية"]
   constructor(private service:OffersService) { }
 
   async ngOnInit() {
     const data = await this.service.GetOffer()
     this.dataArray = data
    }
  }
