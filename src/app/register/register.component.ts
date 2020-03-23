import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AlertService } from '../alert.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	loginForm: formGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    constructor(private data: DataService,private formBuilder: FormBuilder,private router: Router,private alertService: AlertService){}

  ngOnInit(): void {
  	this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            contact: ['', Validators.required]
        });
  }

	get f() { return this.loginForm.controls; }
    onSubmit() {
	 	console.log("111111")
        this.submitted = true;
        let user = {"password":"123"};
        user["email"] = this.f.email.value
        user["password"] = this.f.password.value
         if (this.f.contact.value)
            user["contact"] = "91 " + this.f.contact.value
        console.log(this.data.postUsers({user: user}).subscribe(
        	data => { this.msgs= data["message"]; 
            if(data["success"])
                this.router.navigate(['/login']);
            },
        	error => {
                    this.alertService.error(error);}
        	)
        )
       
        
    }

}
