
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ContactDetailsComponent } from './contact-details.component';
import { ContactsService } from '../contacts/contacts.service';
import { mockList } from '../mock/contacts.mock';

describe('ContactDetailsComponent', () => {
  let component: ContactDetailsComponent;
  let fixture: ComponentFixture<ContactDetailsComponent>;
  let service:ContactsService;
  let mockLst = mockList;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactDetailsComponent ],
      imports:[ RouterTestingModule,HttpClientTestingModule],
      providers:[ ContactsService ]
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(ContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(ContactsService)
  })
   
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get contactdetails',fakeAsync(()=>{
    let spy = spyOn(service , 'getContacts' ).and.returnValue(of(mockList));
    component.getContactDetails();
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalled();
  }));

});
