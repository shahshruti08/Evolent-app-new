import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.less']
})
export class AddContactComponent implements OnInit {
  [x: string]: any;
  items: any[];
  ngOnInit(): void {
    
  }

  
  checkoutForm;
 

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
    
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      mobile: ['', Validators.required, Validators.minLength(10)],
      email: ['', [Validators.required]]

    });
  }
  onSubmit(contact) {
    if (this.checkoutForm.dirty && this.checkoutForm.valid) {
      this.contactService.addToContactList(contact)
      .subscribe(
        response => {
          console.log(response);
          this.openDialog('Success','Contact Added Successfully.');
        },
        error => {
          console.log(error);
        });
      this.checkoutForm.reset();
      
      console.log('Your order has been submitted', contact);
    }
    
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
  back() {
    this.router.navigateByUrl('/');
  }
}
