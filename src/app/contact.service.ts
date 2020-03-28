import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }
    contacts = [];
    addToContactList(contact) {
     // contact.id = this.contacts.length + 1;
      //contact.status = 'Active';
      //this.contacts.push(contact);
      return this.http.post(baseUrl, contact);
     // return '200';
    }
  
    getContacts() {
      return this.http.get(baseUrl);
    }
  
    clearCart() {
      this.contacts = [];
      return this.contacts;
    }

    deleteContact(id) {
      return this.http.delete(`${baseUrl}/${id}`);
    }
  }