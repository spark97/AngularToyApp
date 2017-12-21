import { Component } from '@angular/core';
import  {User} from './_models/user' ;
import {NgForm} from '@angular/forms';
import {LoginService} from './login.service' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {
  constructor(private loginService: LoginService){

  }
  title : string = 'MyApp';
  name = "Harshit";
  password = "12345";
  res : String ;
  details : any  ;
  response : string ;
  auth(form: NgForm){
    this.details = form.value;
    this.loginService.authenticate(form.value.name,form.value.password).subscribe(response => {
      console.log(response);
    });
    //console.log("Res "+this.res );
  }
}
