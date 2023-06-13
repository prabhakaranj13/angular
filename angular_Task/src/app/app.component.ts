import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_Task';
  headertitie:string[]=["HOME","PRODUCT","COMPANY","CONTACT"]
  gallerys=["gallery Image","gallery Image","gallery Image","gallery Image"]

}
