import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
	otpForm: formGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

  	constructor(private data: DataService,private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router) { }

  	ngOnInit(){
	    this.confForm = this.formBuilder.group({
            otp: ['', Validators.required],
            contact: ['', Validators.required]
        });
         
		 // console.log(this.data.getUsers().subscribe(data => this.users = data["message"]))
			
		
	}

	get h() { return this.confForm.controls; }
  submitotp(){
        console.log("787878")
        
        let user = {};
        user["otp"] = this.h.otp.value
        user["email"] = localStorage.getItem('email')
        console.log(this.h.contact.value)
        console.log("1111111")
         console.log(this.data.submitotp({user: user}).subscribe(data => { this.succes_msg = data["message"];}))
    }

}
