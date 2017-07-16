import { Component } from '@angular/core';
import { Contact } from "./contact";

@Component({
  selector: 'my-app',
  template: `<h3>Hello {{contact.name}} located at {{contact.location}}</h3>
  <div>
    Name
    <input type = "text" [(ngModel)] = contact.name/>
  </div>

  <div>
    Location
    <input type = "text" [(ngModel)] = contact.location/>
  </div>
  <hr/>
  <h3>ngFor Directive</h3>

  <ul>
   <li *ngFor = "let c of contacts" (click) = onSelect(c)>
   {{c.name}}</li>
  </ul>

  <div *ngIf = "selectedContact">
  <div>
  Name <input type = text [(ngModel)]  = selectedContact.name/>
  </div>
 <div>
  Location <input type = text [(ngModel)]  = selectedContact.location/>
  </div>
  </div>
  `,
})
export class AppComponent  { 
  contact : Contact = {id : 1, 
  name : 'Shalvin', location : 'Kochi'}
selectedContact : Contact;
  contacts : Contact[] = [
    {id : 1, name:'Shalvin', location : 'Kochi'},
    {id : 2, name:'Arun', location : 'Kuttanad'},
    {id : 2, name:'Sarath', location : 'M Parur'},
  ];

 public onSelect(contact : Contact)
  {
     this.selectedContact = contact;
  }
}
