import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AreasService } from 'src/services/areas/areas.service';
import { Areas, AreasCreate } from 'src/services/cities/citiesModel';

@Component({
  selector: 'all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  AreaData;
  heads = ["الاسم","الاسم بالانجليزي"]
   constructor(private service:AreasService,private socket: Socket) { console.log(socket)
    this.socket.emit('getDoc', 1);

  }
 
   async ngOnInit() {
     const data = await this.service.GetCities()
     console.log(data)
     this.AreaData = data

   }

}
