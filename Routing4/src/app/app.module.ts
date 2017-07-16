import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import  { ContactService} from './contact.service';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailComponent,
    ContactComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path:'contact', component : ContactComponent}])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
