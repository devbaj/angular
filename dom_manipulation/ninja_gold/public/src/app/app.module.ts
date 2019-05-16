import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
