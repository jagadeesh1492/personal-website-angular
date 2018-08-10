import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent implements OnInit {

  constructor() { }

  works: String[] = ['crm', 'dashbord', 'c-mentee', 'c-mentor']

  ngOnInit() {
  }

}
