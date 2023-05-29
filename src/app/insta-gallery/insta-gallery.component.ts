import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta-gallery',
  templateUrl: './insta-gallery.component.html',
  styleUrls: ['./insta-gallery.component.scss']
})
export class InstaGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  trainercarousel = [
    { 
     img:"../../assets/images/agency/slider/1.jpg"
    },
    { 
      img:"../../assets/images/agency/slider/1.jpg"
    },
    { 
      img:"../../assets/images/agency/slider/1.jpg"
    },
    { 
      img:"../../assets/images/agency/slider/1.jpg"
    },
    { 
      img:"../../assets/images/agency/slider/1.jpg"
    },
    { 
      img:"../../assets/images/agency/slider/1.jpg"
    }
  ]

  trainercarouselOptions= {
    center: true,
    loop: true,
    dots: true,
    margin: 0,
    responsive: {
        0: {
            items: 2,
            margin: 10
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 6
        }
    }
  }  

}
