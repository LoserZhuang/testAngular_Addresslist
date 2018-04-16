import {HomeComponent} from "./home.component";
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
/**
 * Created by pact on 2018/4/16.
 */

const HomeRoutes: Routes = [
  {
    path:'home',
    component:HomeComponent,
  }
];

@NgModule({
  imports : [RouterModule.forChild(HomeRoutes)],
  exports : [RouterModule],
  providers : [],
})

export class HomeRoutingModule{}
