import { Component, OnInit } from '@angular/core';

import { Contact }        from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private heroService: ContactService) { }

  ngOnInit(): void {
    this.heroService.getContacts()
      .then(contacts => this.contacts = contacts.slice(1, 5));
  }
}
