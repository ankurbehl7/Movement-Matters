import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-counter',
  templateUrl: './agency-counter.component.html',
  styleUrls: ['./agency-counter.component.scss']
})
export class AgencyCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter = [
    {
      img: "assets/images/1.png",
      count: 680,
      text: 'Project Finished'
    },
    {
      img: "assets/images/3.png",
      count: 485,
      text: 'Cofee Cup'
    },
    {
      img: "assets/images/2.png",
      count: 978,
      text: 'Happy Clients'
    },

  ]
}
