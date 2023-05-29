import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wisdom',
  templateUrl: './wisdom.component.html',
  styleUrls: ['./wisdom.component.scss']
})
export class WisdomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  blogs = [
    {
      img: "assets/images/agency/blog/blog-list-1.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
    {
      img: "assets/images/agency/blog/blog-list-1.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
    {
      img: "assets/images/agency/blog/blog-list-3.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
    {
      img: "assets/images/agency/blog/blog-list-3.jpg",
      date: "June 19, 2018",
      type: "Phonics",
      title: "Twice profit than before you",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,it to make a type specimen book...............",
      btn: "read more"
    },
  ]

}
