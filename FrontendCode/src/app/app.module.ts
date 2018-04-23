import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";

import { AppComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import {HomeComponent} from "./home/home.component";
import {SharedModule} from "./shared/shared.module";
import {HomeModule} from "./home/home.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(rootRouterConfig),
    BrowserAnimationsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
