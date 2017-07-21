import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Contact }                from './contact';
import { ContactService }         from './contact.service';

@Component({
  selector: 'my-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: [ './contacts.component.css' ]
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  selectedContact: Contact;

  constructor(
    private heroService: ContactService,
    private router: Router) { }

  getContacts(): void {
    this.heroService
        .getContacts()
        .then(contacts => this.contacts = contacts);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.contacts.push(hero);
        this.selectedContact = null;
      });
  }

  delete(contact: Contact): void {
    this.heroService
        .delete(contact.id)
        .then(() => {
          this.contacts = this.contacts.filter(h => h !== contact);
          if (this.selectedContact === contact) { this.selectedContact = null; }
        });
  }

  ngOnInit(): void {
    this.getContacts();
  }

  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedContact.id]);
  }
}
