import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adress-popup',
  templateUrl: './adress-popup.component.html',
  styleUrls: ['./adress-popup.component.css']
})
export class AdressPopupComponent implements OnInit, OnChanges {
  @Input('data') data: any = {};
  @Input('isVisible') isVisible: boolean = false;
  @Output('close') close: EventEmitter<any> = new EventEmitter();
  @ViewChild('map3', { static: true }) map3;
  lat = 0;
  lng = 0;
  zoom = 15;
  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    this.isVisible = false;
    this.close.emit(false);
  }  
  
  ngOnChanges(changes: SimpleChanges) {
    
    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        switch(prop) {
          case 'data' :
            this.data = changes.data.currentValue;        
            break;
          case 'isVisible' :
            this.isVisible = changes.isVisible.currentValue;           
            break;                                  
        }
      }
    } 
               
  }   

}
