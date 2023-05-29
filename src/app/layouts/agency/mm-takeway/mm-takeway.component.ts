import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-mm-takeway',
  templateUrl: './mm-takeway.component.html',
  styleUrls: ['./mm-takeway.component.scss']
})
export class MmTakewayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
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
