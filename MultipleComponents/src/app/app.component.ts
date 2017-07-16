import { Component } from '@angular/core';
import { Contact } from "app/contact";

const CONTACTS : Contact[] = [
 {id:1, name:'Shalvin'},
 {id:2, name:'Sarath'},
 {id:1, name:'Vyshakh'}
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 contacts = CONTACTS;
 selectedContact : Contact;

 onSelect(contact : Contact)
 {
   this.selectedContact = contact;
 }

}
