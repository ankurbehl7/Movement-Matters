import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgencyComponent } from './agency/agency.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyComponent,
    data: {
      title: "Movement Matters | Somatic Movement Therapy",
      content: "We teach the Art of Congruence to master economy of thought & action"
    }
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
