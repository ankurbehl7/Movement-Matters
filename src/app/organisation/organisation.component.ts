import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss']
})
export class OrganisationComponent implements OnInit {

  constructor() { }
  fadeInLeft: any;
  
  ngOnInit(): void {
  }
  counter = [
    {
      img: "assets/images/1.png",
      count: 180,
      text: 'Corporate Partners'
    },
    {
      img: "assets/images/3.png",
      count: 1.8,
      text: 'Consultants'
    },
    {
      img: "assets/images/2.png",
      count: 30,
      text: 'Certified Trainers'
    },

  ]
  
}
