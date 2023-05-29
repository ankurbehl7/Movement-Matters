import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us-service',
  templateUrl: './why-us-service.component.html',
  styleUrls: ['./why-us-service.component.scss']
})
export class WhyUsServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  business = [
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    },
    {
      title:'Beautiful Interface Layout',
      description:'Lorem Ipsum is simply dummy text of the print- ing and typesetting industry.'
    }
  ]
}
