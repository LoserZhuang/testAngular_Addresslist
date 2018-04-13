/**
 * Created by pact on 2018/4/13.
 */
import { Component ,OnInit } from '@angular/core';

@Component({
  moduleId : module.id,
  selector : 'sd-home',
  templateUrl : './home.component.html',
  styleUrls : ['./home.component.scss']
})

export class HomeComponent implements OnInit{
  array = [1];

  ngOnInit(){
    setTimeout(_ => {
      this.array = [1,2,3,4];
    },500);
  }
}
