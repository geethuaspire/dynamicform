import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params} from '@angular/router'; 
import { ContactsService } from '../contacts/contacts.service';
@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contactdetails_data:any;
  contactDetails:any;
  pid:any;
  constructor(
    private route:ActivatedRoute,
    private contactsservice:ContactsService,

  ) { }

  ngOnInit(): void {
    this.contactsservice.getContacts()
    .subscribe((data:any)=>{
      this.contactdetails_data = data;
      console.log("contactdetails dat:",this.contactdetails_data.length)
    });

   this.route.params.forEach((params:Params) =>{
    console.log("params",params)
     this.contactsservice.getContacts().subscribe(data=>{
        this.contactdetails_data = data;
         console.log("contactdetails_data",this.contactdetails_data);
         this.contactDetails = this.contactdetails_data.find((contact:any) => contact.id == params['id']);
         console.log("contact details::",this.contactDetails);
     })
   })
}
}