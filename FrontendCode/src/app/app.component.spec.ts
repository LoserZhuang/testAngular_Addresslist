import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {rootRouterConfig} from "./app.routes";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgZorroAntdModule} from "ng-zorro-antd";
import {APP_BASE_HREF} from "@angular/common";

beforeEach(async(() => {
  TestBed.configureTestingModule({
    imports:[
      NgZorroAntdModule.forRoot(),
      RouterModule.forRoot(rootRouterConfig),
    ],
    declarations: [
      AppComponent,
      HomeComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue : '/' }]
  }).compileComponents();
}));

