import { Component, OnInit } from '@angular/core';
import { ContactService } from "app/contact.service";
import { Contact } from "app/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  selectedContact : Contact;

  contacts : Contact[];

  constructor(private contactService : ContactService) { }

  ngOnInit(): void
{
  this.contactService.getContacts().then(contacts => this.contacts = contacts );
}
  
   onSelect(contact : Contact)
   {
    this.selectedContact = contact;
   }

}
