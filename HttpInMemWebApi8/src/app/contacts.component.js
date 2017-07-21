"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contact_service_1 = require("./contact.service");
var ContactsComponent = (function () {
    function ContactsComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    ContactsComponent.prototype.getContacts = function () {
        var _this = this;
        this.heroService
            .getContacts()
            .then(function (contacts) { return _this.contacts = contacts; });
    };
    ContactsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.contacts.push(hero);
            _this.selectedContact = null;
        });
    };
    ContactsComponent.prototype.delete = function (contact) {
        var _this = this;
        this.heroService
            .delete(contact.id)
            .then(function () {
            _this.contacts = _this.contacts.filter(function (h) { return h !== contact; });
            if (_this.selectedContact === contact) {
                _this.selectedContact = null;
            }
        });
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.getContacts();
    };
    ContactsComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    ContactsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedContact.id]);
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        selector: 'my-contacts',
        templateUrl: './contacts.component.html',
        styleUrls: ['./contacts.component.css']
    }),
    __metadata("design:paramtypes", [contact_service_1.ContactService,
        router_1.Router])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map