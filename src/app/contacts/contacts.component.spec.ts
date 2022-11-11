import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, inject, TestBed, tick ,waitForAsync} from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ContactsComponent } from './contacts.component';
import { ContactsService } from './contacts.service';
import { mockList} from '../mock/contacts.mock';
import { Router } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { LoginComponent } from '../login/login.component';
import { By } from '@angular/platform-browser';
import { IterableDiffers } from '@angular/core';

describe('ContactsComponent', () => {
  let component: ContactsComponent;
  let fixture: ComponentFixture<ContactsComponent>;
  let service:ContactsService;
  let mockLst = mockList;
 // let router:Router;
  //const routerSpy = jasmine.createSpyObj('Router',['navigateByUrl'])
 
  beforeEach( async() => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsComponent ],
      imports:[ HttpClientTestingModule, HttpClientModule,
    //    RouterTestingModule.withRoutes([{path:'contact_details/:id',component:ContactDetailsComponent},{ path:'login',component:LoginComponent}])
      ],
      providers:[ 
           ContactsService,
       // { provide: Router, useValue: routerSpy } 
           ],

      })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(ContactsComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      service = TestBed.inject(ContactsService);
       
    });
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get contacts',fakeAsync(()=>{
     
    let spy = spyOn(service, 'getContacts').and.returnValue(of(mockLst));
    component.getContactsData();
    tick();
    expect(spy).toHaveBeenCalled();

  }));
  
   it('should call Router.navigateByUrl', inject([Router], (router: Router) => {
    spyOn(router, 'navigateByUrl');
    component.logout();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
}));



// it(' should get contactdetail ',()=>{
//   const spy = router.navigateByUrl as jasmine.Spy;
//   const navArgs = spy.calls.first().args[0];
//   expect(navArgs).withContext('should nav to ViewDetailComponent for book detail')
//         .toBe('/contact_details/' + id);
  
// })



// it('should tell ROUTER to navigate when button clicked', fakeAsync(() => {
//   let router = fixture.debugElement.injector.get(Router);
//   let buttonElements = fixture.debugElement.query(By.css('.detail-button'));
//   buttonElements.triggerEventHandler('click', null);
//   tick();
//   const spy = router.navigateByUrl as jasmine.Spy;
//   const navArgs = spy.calls.first().args[0];
//   const id = 1;
//   expect(navArgs).withContext('should nav to Contact_details Component for contact detail')
//     .toBe('/contact_details/' + id);
// }));


});
