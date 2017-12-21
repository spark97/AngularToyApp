import { Injectable } from '@angular/core' ;
import {Http, Response} from '@angular/http' ;
import {Observable} from 'rxjs/Rx' ;
import 'rxjs/add/operator/map' ;

@Injectable()
export class LoginService{
    constructor(
        private http:Http
    ){}

    body : string ;

    authenticate(name:String, password:String):Observable<any>{
        
        this.body = "username="+name+"&password="+password;
        return this.http.get('http://localhost/angular/login.php',this.body).map((res:Response) => res.json()) ;
    }
}

