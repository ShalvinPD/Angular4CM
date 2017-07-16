import { Component, OnInit } from '@angular/core';
import { ContactService } from "app/contact.service";
import { Contact } from "app/contact";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedContact : Contact

  contacts : Contact[]
constructor(private contactService : ContactService){}

ngOnInit(): void
{
  this.contactService.getContacts().then(contacts => this.contacts = contacts );
}
  
   onSelect(contact : Contact)
   {
    this.selectedContact = contact;
   }
}
