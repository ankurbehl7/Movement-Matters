import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './layouts/agency/agency.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component'
import { WhyUsComponent } from './why-us/why-us.component';
import { FaqComponent } from './faq/faq.component';
import { EventComponent } from './event/event.component';
import { KnowMovementMatterComponent } from './know-movement-matter/know-movement-matter.component';
import { WisdomComponent } from './wisdom/wisdom.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { IndividualComponent } from './individual/individual.component';
import { BookDemoComponent } from './book-demo/book-demo.component';
import { MmPostureBaithakComponent } from './mm-posture-baithak/mm-posture-baithak.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: AgencyComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path:'discover',
    component:KnowMovementMatterComponent
  },
  {
    path: 'why-us',
    component: WhyUsComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'wisdom',
    component: WisdomComponent,
  },
  {
    path: 'organisations',
    component: OrganisationComponent,
  },
  {
    path: 'get-care',
    component: IndividualComponent,
  },
  {
    path: 'request-a-demo',
    component: BookDemoComponent,
  },
  {
    path: 'posture-baithak',
    component: MmPostureBaithakComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
