import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Contact }        from './contact';
import { ContactService } from './contact.service';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: [ './contact-detail.component.css' ]
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;

  constructor(
    private heroService: ContactService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getContact(+params['id']))
      .subscribe(contact => this.contact = contact);
  }

  save(): void {
    this.heroService.update(this.contact)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
