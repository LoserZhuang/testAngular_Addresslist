/**
 * Created by pact on 2018/4/13.
 */
import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";

export const rootRouterConfig: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
]
