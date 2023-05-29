import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Menu
export interface Menu {
   path?: string;
   title?: string;
   type?: string;
   icon?: string;
   badgeType?: string;
   badgeValue?: string;
   active?: boolean;
   megaMenu?: boolean;
   megaMenuType?: string; // small, medium, large
   bookmark?: boolean;
   subtitle?: string;
   children?: Menu[];
}

@Injectable({
   providedIn: 'root'
})
export class NavService {

   constructor() { }

   MENUITEMS: Menu[] = [
      { title: 'Home', type: 'link', path: '/home' },
      { title: 'Discover', type: 'link', path: '/discover' },
      { title: 'Get Care', type: 'link', path: '/get-care' },
      { title: 'Organizations', type: 'link', path: '/organisations' },
      { title: 'About Us', type: 'link', path: '/about-us' },
      { title: 'Contact Us', type: 'link', path: '/contact-us' },
      // {
      //    title: 'About', type: 'sub', children: [
      //       { path: '/about-us', title: 'About Us', type: 'link' },
      //       { path: '/know-our-work', title: 'know our work ', type: 'link' },
      //    ]
      // },
      // {
      //    title: 'Services', type: 'sub', children: [
      //       { path: '/for-individuals', title: 'For Individuals',subtitle:'Help Resolve psychomomatic Pain, Back Pain & posture', type: 'link' },
      //       { path: '/for-corporate ', title: 'For Corporate ',subtitle:'Help Resolve psychomomatic Pain, Back Pain & posture', type: 'link' },
      //    ]
      // },
      // {
      //    title: 'Events', type: 'link', path: '/event'
      // },
      // {
      //    title: 'Portfolio', type: 'sub', children: [
      //       { path: '/ ', title: 'Gallery ', type: 'link' },
      //       { path: '/ ', title: 'Events ', type: 'link' },
      //    ]
      // },


   ]

   // Array
   items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}
