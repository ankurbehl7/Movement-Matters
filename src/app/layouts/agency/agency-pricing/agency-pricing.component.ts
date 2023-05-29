import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency-pricing',
  templateUrl: './agency-pricing.component.html',
  styleUrls: ['./agency-pricing.component.scss']
})
export class AgencyPricingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pricing = [
    { 
      icon:"rocket-ship",
      package:"HCL ",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/HCL-Logo.png"
    },
    { 
      icon:"rocket-ship",
      package:"Lexport",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/lexport.jpg"
    },
    { 
      icon:"rocket-ship",
      package:"Paritosh Pathak",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/paritoshPathak.jpg"
    },
    { 
      icon:"rocket-ship",
      package:"LG",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/lg.png"
    },
    { 
      icon:"rocket-ship",
      package:"Vega",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/vega.jpg"
    },
    { 
      icon:"rocket-ship",
      package:"Amity University",
      price:"0",
      btn:"purchase",
      img:"assets/images/client/Amity_University_logo.png"
    },
    {
      icon:"diamond",
      package:"Goonj",
      price:"49",
      btn:"purchase",
      img:"assets/images/client/goonj.png"
    },
    {
      icon:"diamond",
      package:"Step by Step School",
      price:"49",
      btn:"purchase",
      img:"assets/images/client/sbs_noida_logo.png"
    },
    {
      icon:"pie-chart",
      package:"My Perch",
      price:"99",
      btn:"purchase",
      img:"assets/images/client/myperch.jpg"
    }
  ]
  
  pricingcarouselOptions= {
        items: 3,
        margin: 30,
        nav: false,
        autoplay: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            576: {
                items: 2,
                margin: 10
            },
            991: {
                items:2,
                margin: 15
            },
            992: {
                items:3,
                margin: 15
            },
            1000: {
                items: 3
            }
        }
  }

}
