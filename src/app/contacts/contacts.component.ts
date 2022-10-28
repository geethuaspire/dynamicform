import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ContactsService } from './contacts.service';
//import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
   contactData:any;
  // resData:any;
  constructor(
    private contactsservice:ContactsService,
   // private registerservice:RegisterService,
   private router:Router,
  ) { }

  ngOnInit(): void {
    this.getContactsData();
    //this.getData();
  }
  getContactsData(){;
    this.contactsservice.getContacts().subscribe(res=>{
       this.contactData = res;
       console.log("cntacts data:",res);

    });
  }
  //  getData(){
  //   this.registerservice.getData().subscribe(res=>{
  //     this.resData = res;
  //     console.log("resData:",res);
  //   })
  //    }
  getDetails(id:string){
     console.log("id:",id);
     this.router.navigate(['/contact_details',id ]);
  }

  logout(){
    this.router.navigateByUrl('/login');
  }
}
