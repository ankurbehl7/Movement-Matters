import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-mates',
  templateUrl: './team-mates.component.html',
  styleUrls: ['./team-mates.component.scss']
})
export class TeamMatesComponent implements OnInit {


  public activeFilter = 'ourFacilitators'

  constructor() { }

  ngOnInit(): void {
  }

  public filterImg(item) {
    this.activeFilter = item
  }
}
