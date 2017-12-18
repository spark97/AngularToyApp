import { Injectable } from '@angular/core' ;
import {Http, Response} from '@angular/http' ;
import 'rxjs/add/operator/map' ;

@Injectable()
export class LoginService{
    constructor(
        private http:Http
    ){}

    authenticate(name:String, password:String) {
        return this.http.get('localhost/authenticate.php').map((res:Response) => res.json()) ;
    }
}

