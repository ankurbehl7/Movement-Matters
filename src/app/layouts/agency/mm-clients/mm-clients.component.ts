import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mm-clients',
  templateUrl: './mm-clients.component.html',
  styleUrls: ['./mm-clients.component.scss']
})
export class MmClientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  brands = [
    { img: "assets/images/client/HCL-Logo.png" },
    { img: "assets/images/client/lexport.png" },
    { img: "assets/images/client/paritoshPathak.png" },
    { img: "assets/images/client/lg.png" },
    { img: "assets/images/client/vega.png" },
    { img: "assets/images/client/Amity_University_logo.png" },
    { img: "assets/images/client/goonj.png" },
    { img: "assets/images/client/sbs_noida_logo.png" },
    { img: "assets/images/client/myperch.png" }
  ]
  
  brandcarouselOptions= {
    items: 6,
        margin: 80,
        autoHeight: true,
        nav: false,
        dots:false,
        autoplay: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        loop: true,
        responsive: {
            0: {
                items: 1,
                margin: 10
            },
            320: {
                items: 2,
                margin: 10
            },
            360: {
                items: 3,
                margin: 20
            },
            480: {
                items: 4,
                margin: 30
            },
            767: {
                items: 4,
                margin: 30
            },
            991: {
                items: 5,
                margin: 20
            },
            992: {
                item:6

            }
        }
  }

}
