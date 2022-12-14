import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerData } from '../register/register.type';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  static canActivate(arg0: any, arg1: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(
    private http:HttpClient,
    private router:Router,
  ) { }

  getContacts(){
   return this.http.get<registerData[]>("http://localhost:3000/submit")
  }
 
}
