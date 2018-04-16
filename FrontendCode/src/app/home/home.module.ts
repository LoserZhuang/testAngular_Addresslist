/**
 * Created by pact on 2018/4/13.
 */
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {SharedModule} from "../shared/shared.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports:[
    HomeRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports:[HomeComponent],
})

export class HomeModule {}
