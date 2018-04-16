import {TestBed } from "@angular/core/testing";
import {HomeComponent} from "./home.component";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home.routing.module";
describe('HomeComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HomeRoutingModule,
        SharedModule
      ],
      declarations:[
        HomeComponent
      ],
    }).compileComponents();
  });
  it('should create the home', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
