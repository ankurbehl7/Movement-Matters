import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-service',
  templateUrl: './event-service.component.html',
  styleUrls: ['./event-service.component.scss']
})
export class EventServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs = [
    { 
     img:"assets/images/bg-img/event-bg.jpg",
     date:"5 September 2019",
     type:"admin",
     title:"Find Great Speaker For Event.",
     subTitle:"Detais This Event",
     description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
    },
    { 
      img:"assets/images/bg-img/event-bg.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"assets/images/bg-img/event-bg.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"assets/images/bg-img/event-bg.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"assets/images/bg-img/event-bg.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
     { 
      img:"assets/images/bg-img/event-bg.jpg",
      date:"5 September 2019",
      type:"admin",
      title:"Find Great Speaker For Event.",
      subTitle:"Detais This Event",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ."
     },
  ]
  
    blogCarouselOptions= {
      items: 3,
      width:200,
      margin: 30,
      nav: false,
      dots:true,
      autoplay: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      loop: true,
      responsive: {
          0: {
              items: 1,
              margin: 10
          },
          991: {
              items: 2,
              margin: 10
          },
          1200: {
              items: 3,
              margin: 30
          }
      }
  }

}
