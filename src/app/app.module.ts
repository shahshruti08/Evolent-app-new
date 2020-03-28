import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { RouterModule } from '@angular/router';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListContactComponent } from './list-contact/list-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import { DeleteContactListComponent } from './delete-contact-list/delete-contact-list.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    ContactCardComponent,
    ListContactComponent,
    DeleteContactListComponent,
    DialogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: ContactCardComponent },
      { path: 'addContact', component: AddContactComponent },
      { path: 'listContact', component: ListContactComponent},
      { path: 'deleteContact', component: DeleteContactListComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
