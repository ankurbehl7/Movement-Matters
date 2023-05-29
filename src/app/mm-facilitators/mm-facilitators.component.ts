import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mm-facilitators',
  templateUrl: './mm-facilitators.component.html',
  styleUrls: ['./mm-facilitators.component.scss']
})
export class MmFacilitatorsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users = [
    { 
      img:"assets/images/agency/testimonial/1.png",
      name:"Kolan Motto",
      designation:"CEO, Therat",
      review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    },
   
    // { 
    //   img:"assets/images/agency/testimonial/2.png",
    //   name:"Kolan Motto",
    //   designation:"CEO, Therat",
    //   review:"It goes without saying that customer data sec urity and compliance is top of mind in most retail board rooms compliance is top."
    // }
  ]
  
  testimonialCarouselOptions5= {
    items: 3,
    margin: 65,
    nav: true,
    dots: false,
    autoplay: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    loop: true,
    responsive: {
        0: {
            items: 1,
            margin: 10
        },
        575: {
            items:2,
            margin: 10
        },
        991: {
            items: 2,
            margin: 30
        },
        1199: {
            items: 3,
            margin: 30
        }
    }
  }

  
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    navText: ['&#8249', '&#8250;'],
    autoplay:true,
    responsive: {
      0: {
        items: 1 
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      },
      1200: {
        items: 1
      },
      1440: {
        items: 1
      }
    },
    // nav: true
  }
}
