import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing }        from './app.routing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule }    from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AlertService } from './alert.service';
import { OtpComponent } from './otp/otp.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    OtpComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
