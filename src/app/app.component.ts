import { Component,OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    // user = {"username":"abc","password":"123"};
	loginForm: formGroup;
    otpForm: formGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    loginForm = true;
	constructor(private data: DataService,private formBuilder: FormBuilder){

	}

	ngOnInit(){
		 this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            contact: ['', Validators.required]
        });

         this.otpForm = this.formBuilder.group({
            contact: ['', Validators.required],
            email: ['', Validators.required]
        });

         this.confForm = this.formBuilder.group({
            otp: ['', Validators.required],
            contact: ['', Validators.required]
        });
         
		 // console.log(this.data.getUsers().subscribe(data => this.users = data["message"]))
			
		
	}
	get f() { return this.loginForm.controls; }
    get g() { return this.otpForm.controls; }
    get h() { return this.confForm.controls; }
	 onSubmit() {
	 	console.log("111111")
        this.submitted = true;
        let user = {"password":"123"};
        // console.log(this.data.getUsers().subscribe(data => this.users = data["message"]))
        // console.log(this.data.postUsers(this.f).subscribe(data => this.users = data["message"]))
        // stop here if form is invalid
        user["email"] = this.f.username.value
        user["password"] = this.f.password.value
        user["contact"] = "91 " + this.f.contact.value
        console.log(this.data.postUsers({user: user}).subscribe(data => { this.users = data["message"];}))
        this.loginForm = false
        // this.loading = true;
        // console.log(this.f.username.value)
        // console.log(this.f.password.value)
        
    }

    generateotp(){
        let contact=""
         let user = {};
        user["email"] = this.g.email.value
        console.log(this.data.getOtp({user: user}).subscribe(data => { this.msg = data["message"],this.contact = data["number"];}))
    }

    submitotp(abc){
        console.log("787878")
        
        let user = {};
        user["otp"] = this.h.otp.value
        user["contact"] = abc
        console.log(this.h.contact.value)
        console.log("1111111")
         console.log(this.data.submitotp({user: user}).subscribe(data => { this.succes_msg = data["message"];}))
    }
  
}
