import { Injectable } from '@angular/core';
import { Contact } from "app/contact";
import { CONTACTS } from "app/mock-contacts";

@Injectable()
export class ContactService {

  getContacts() : Promise<Contact[]>
  {
    return Promise.resolve(CONTACTS);
  }
  constructor() { }

}
