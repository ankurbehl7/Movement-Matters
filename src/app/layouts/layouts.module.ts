import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountToModule } from 'angular-count-to';
import { AngularTiltModule } from 'angular-tilt';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { Ng5SliderModule } from 'ng5-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SwiperConfigInterface, SwiperModule, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SharedModule } from '../shared/shared.module';
import { AgencyBlogComponent } from './agency/agency-blog/agency-blog.component';
import { AgencyContentComponent } from './agency/agency-content/agency-content.component';
import { AgencyCopyrightComponent } from './agency/agency-copyright/agency-copyright.component';
import { AgencyCounterComponent } from './agency/agency-counter/agency-counter.component';
import { AgencyFooterComponent } from './agency/agency-footer/agency-footer.component';
import { AgencyHeaderComponent } from './agency/agency-header/agency-header.component';
import { AgencyNavComponent } from './agency/agency-nav/agency-nav.component';
import { AgencyPricingComponent } from './agency/agency-pricing/agency-pricing.component';
import { AgencyServicesComponent } from './agency/agency-services/agency-services.component';
import { AgencySpeakerComponent } from './agency/agency-speaker/agency-speaker.component';
import { AgencyTestimonialComponent } from './agency/agency-testimonial/agency-testimonial.component';
import { AgencyVideoComponent } from './agency/agency-video/agency-video.component';
// Agency Layout
import { AgencyComponent } from './agency/agency.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { MmDirectorMessageComponent } from './agency/mm-director-message/mm-director-message.component';
import { MmClientsComponent } from './agency/mm-clients/mm-clients.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { AboutMessageComponent } from '../about-us/about-message/about-message.component';
import { TeamMatesComponent } from '../about-us/team-mates/team-mates.component';
import { WhyUsComponent } from '../why-us/why-us.component';
import { WhyUsDescriptionComponent } from '../why-us/why-us-description/why-us-description.component';
import { WhyUsMessageComponent } from '../why-us/why-us-message/why-us-message.component';
import { WhyUsServiceComponent } from '../why-us/why-us-service/why-us-service.component';
import { WisdomComponent } from '../wisdom/wisdom.component';
import { OrganisationComponent } from '../organisation/organisation.component';
import { IndividualComponent } from '../individual/individual.component';
import { FaqComponent } from '../faq/faq.component';
import { KnowMovementMatterComponent } from '../know-movement-matter/know-movement-matter.component';
import { EventComponent } from '../event/event.component';
import { DictionaryComponent } from '../know-movement-matter/dictionary/dictionary.component'
import { EventMessageComponent } from '../event/event-message/event-message.component';
import { EventServiceComponent } from '../event/event-service/event-service.component'
import { InstaGalleryComponent } from '../insta-gallery/insta-gallery.component'
import { RequestADemoComponent } from '../request-a-demo/request-a-demo.component'
import { BookDemoComponent } from '../book-demo/book-demo.component'
import { MmProcessComponent } from '../mm-process/mm-process.component'
import { MmCalenderComponent } from '../book-demo/mm-calender/mm-calender.component'
import { MmFacilitatorsComponent } from '../mm-facilitators/mm-facilitators.component'
import { MmTakewayComponent } from './agency/mm-takeway/mm-takeway.component'
import { MmPostureBaithakComponent} from '../mm-posture-baithak/mm-posture-baithak.component'

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {};

@NgModule({
  declarations: [
    AboutUsComponent, WhyUsComponent, FaqComponent, WhyUsMessageComponent, EventMessageComponent, KnowMovementMatterComponent,
    AboutMessageComponent, TeamMatesComponent, WhyUsDescriptionComponent, EventComponent, EventServiceComponent, WisdomComponent,
    AgencyComponent, AgencyNavComponent, AgencyHeaderComponent, WhyUsServiceComponent, RequestADemoComponent,BookDemoComponent,
    AgencyContentComponent, AgencyServicesComponent, DictionaryComponent,MmProcessComponent,MmCalenderComponent,
    AgencyVideoComponent, AgencyCounterComponent,MmFacilitatorsComponent,
    AgencyPricingComponent, AgencySpeakerComponent,MmPostureBaithakComponent,
    AgencyTestimonialComponent, AgencyBlogComponent, InstaGalleryComponent,MmTakewayComponent,
    AgencyFooterComponent, AgencyCopyrightComponent, WisdomComponent, OrganisationComponent, IndividualComponent,
    MmDirectorMessageComponent, MmClientsComponent, ContactUsComponent],

  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SwiperModule,
    CarouselModule,
    NgbModule,
    SharedModule,
    CountToModule,
    AngularTiltModule,
    ScrollToModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule
  ],

  exports: [],

  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})

export class LayoutsModule { }
