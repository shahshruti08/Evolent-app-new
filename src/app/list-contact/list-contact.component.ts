import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.less']
})
export class ListContactComponent implements OnInit {
  lists: any[];
  
  displayedColumns: string[]
  ngOnInit(): void {
    this.displayedColumns =  ['name', 'address', 'mobile', 'email'];
  }
 
  constructor(
    private contactService: ContactService,
    private router: Router
  ) { 
   
  }
  dataSource = this.contactService.getContacts();
  back() {
    this.router.navigateByUrl('/');
  }

  
  

}
