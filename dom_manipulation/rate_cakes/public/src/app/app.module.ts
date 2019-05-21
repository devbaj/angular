import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SubmissionComponent } from './submission/submission.component';
import { DirectoryComponent } from './directory/directory.component';
import { DetailsComponent } from './details/details.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    SubmissionComponent,
    DirectoryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
