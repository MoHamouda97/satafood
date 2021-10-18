import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export default class EditComponent implements OnInit {
  image: any;

  constructor() { }

  ngOnInit() {
  }


  Chooseimage($event) {
    console.log($event.target.files[0])
    this.image =  $event.target.files[0]
      }
}
