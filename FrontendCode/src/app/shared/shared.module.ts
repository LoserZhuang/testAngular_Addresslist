/**
 * Created by pact on 2018/4/16.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavbarModule} from "./navbar/navbar.module";
@NgModule({
  imports: [CommonModule,RouterModule,NavbarModule],
  declarations : [],
  exports : [CommonModule,RouterModule,NavbarModule]
})

export class SharedModule {
  static forRoot():ModuleWithProviders{
    return{
      ngModule : SharedModule
    };
  }
}
