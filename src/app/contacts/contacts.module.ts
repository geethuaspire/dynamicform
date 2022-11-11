import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ContactsModule { }
