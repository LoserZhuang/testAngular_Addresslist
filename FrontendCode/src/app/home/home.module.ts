/**
 * Created by pact on 2018/4/13.
 */
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home.routing.module";
import {SharedModule} from "../shared/shared.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports:[
    HomeRoutingModule,
    NgZorroAntdModule.forRoot(),
    SharedModule
  ],
  exports:[HomeComponent],
})

export class HomeModule {}
