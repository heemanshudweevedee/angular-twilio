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
	loginForm: FormGroup;
    
    loading = false;
    submitted = false;
    returnUrl: string;
    
	constructor(private data: DataService,private formBuilder: FormBuilder){

	}

	ngOnInit(){
		
         
		 // console.log(this.data.getUsers().subscribe(data => this.users = data["message"]))
			
		
	}
	get f() { return this.loginForm.controls; }
    

    

    
  
}
