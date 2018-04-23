import { NgModule } from '@angular/core';
import {NavbarComponent} from "./navbar.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations:[
    NavbarComponent
  ],
  imports:[
    RouterModule,
    NgZorroAntdModule.forRoot(),
  ],
  exports:[NavbarComponent],
})

export class NavbarModule {}
