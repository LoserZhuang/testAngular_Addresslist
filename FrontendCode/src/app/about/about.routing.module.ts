import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";

const AboutRoutes :Routes = [
  {
    path:'',
    component:AboutComponent,
  }
];

@NgModule({
  imports : [RouterModule.forChild(AboutRoutes)],
  exports : [RouterModule],
  providers : [],
})

export class AboutRoutingModule{}
