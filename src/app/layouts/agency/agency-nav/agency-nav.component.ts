import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-nav',
  templateUrl: './agency-nav.component.html',
  styleUrls: ['./agency-nav.component.scss']
})
export class AgencyNavComponent implements OnInit {

  currentRoute: string;

  constructor(router: Router
    ) {  
      router.events.subscribe(val => {
       this.currentRoute = val['url'];
      });
  }

  ngOnInit() {
  }

}
