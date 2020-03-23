import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	otpForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    msg = "";
    contact = "";

  constructor(private data: DataService,private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) { }

  ngOnInit(): void {
   		this.otpForm = this.formBuilder.group({
            password: ['', Validators.required],
            email: ['', Validators.required]
        });
  }

  get g() { return this.otpForm.controls; }

  generateotp(){

       if (this.otpForm.invalid) {
            return;
        }
        let contact=""
         let user = {};
        user["email"] = this.g.email.value
        localStorage.setItem('email', user["email"]);
        console.log(this.data.getOtp({user: user}).subscribe(data => { this.msg = data["message"],this.contact = data["number"], this.router.navigate(['/otp']);}))
    }

}

