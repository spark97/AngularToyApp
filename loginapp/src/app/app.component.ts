import { Component } from '@angular/core';
import  {User} from './_models/user' ;
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'MyApp';
  authenticate(form: NgForm){
    console.log(form.value)
  }
}
