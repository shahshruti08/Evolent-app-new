import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-delete-contact-list',
  templateUrl: './delete-contact-list.component.html',
  styleUrls: ['./delete-contact-list.component.less']
})
export class DeleteContactListComponent implements OnInit {

  constructor(
    private contactService : ContactService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  displayedColumns: string[]
  ngOnInit(): void {
    this.displayedColumns =  ['name', 'address', 'mobile', 'email', 'delete'];
    

  }
  dataSource = this.contactService.getContacts();

  deleteContact(contactId) {
    this.contactService.deleteContact(contactId)
    .subscribe(
      response => {
        console.log(response);
        this.openDialog('Successfull', 'Contact Successfully deleted.');
      },
      error => {
        console.log(error);
      });
    
  }
  back() {
    this.router.navigateByUrl('/');
  }
  openDialog(ttl , msg): void {
    const dialogRef = this.dialog.open(DialogComponentComponent, {
      width: '250px',
      data: {title: ttl, message: msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.router.navigateByUrl('/');
    });
  }

}
