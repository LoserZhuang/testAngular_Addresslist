/**
 * Created by pact on 2018/4/16.
 */
import {NgModule, ModuleWithProviders} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "./navbar";
@NgModule({
  imports: [CommonModule],
  declarations : [NavbarComponent],
  exports : [CommonModule,NavbarComponent]
})

export class SharedModule {
  static forRoot():ModuleWithProviders{
    return{
      ngModule : SharedModule
    };
  }
}
