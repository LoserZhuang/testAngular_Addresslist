import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {Component, OnInit} from "@angular/core";
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";
@Component({
  selector: 'sd-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent implements OnInit{
  navActive:number = 0;
  constructor(private _router: Router,
              private _activatedRoute: ActivatedRoute,){}
  ngOnInit(){
    console.log(this._router.url);
    let url = this._router.url.replace('/','');
    if(url=='home'){
      this.navActive = 0;
    }else if(url=='admin'){
      this.navActive = 1;
    }else if(url=='about'){
      this.navActive = 2;
    }
  }
}
