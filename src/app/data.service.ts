import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

// import { Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class DataService {
	headers = new HttpHeaders({
   'Content-Type': 'application/json',
   'Accept': 'application/json'
  });


  


  constructor(private http: HttpClient) { }


    getUsers(){
    	console.log("898989")
        return this.http.get('https://twilio-ap.herokuapp.com/api/v1/user_detail')
    }

    postUsers(user) {
      console.log(user)
      return this.http.post<any>('https://twilio-ap.herokuapp.com/api/v1/create_user', user, httpOptions);
    }

    getOtp(user){
      console.log(user)
      return this.http.post<any>('https://twilio-ap.herokuapp.com/api/v1/create_otp', user, httpOptions);
    }

    submitotp(otp){
      return this.http.post<any>('https://twilio-ap.herokuapp.com/api/v1/submit_otp', otp, httpOptions);
    }
  }
