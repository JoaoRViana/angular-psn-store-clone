import { Component, OnInit } from '@angular/core';
import { fakeData } from 'src/app/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contents:any

  constructor() { 
    this.contents = fakeData
  }

  ngOnInit(): void {
  }

}
