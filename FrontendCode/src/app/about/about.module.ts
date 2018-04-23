/**
 * Created by pact on 2018/4/23.
 */
import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {AboutComponent} from "./about.component";
import {AboutRoutingModule} from "./about.routing.module";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations:[AboutComponent],
  imports:[
    AboutRoutingModule,
    NgZorroAntdModule.forRoot(),
    SharedModule
  ],
  exports:[AboutComponent],
})

export class AboutModule {}
