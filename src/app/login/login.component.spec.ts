import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { of } from 'rxjs';
import { mockList } from '../mock/login.mock';
import { RegisterComponent } from '../register/register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLst = mockList;
  let service:LoginService;
  //let routerSpy : { navigateByUrl : jasmine.Spy}

  beforeEach( () => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes([{ path : 'contacts', component:ContactsComponent},{ path:'register',component:RegisterComponent}])
       ],
      providers:[LoginService],
      declarations: [ LoginComponent, RegisterComponent,
     // { provide:Router, useValue:routerSpy } 
    ],
      
    })
    .compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(LoginService)
   })
   
  // it('Component successfully created', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('unit test for subscribe method',fakeAsync(()=>{
   let spy = spyOn(service,'onSubmit').and.returnValue(of([mockLst]));
   //let subSpy = spyOn(service.onSubmit(),'subscribe');
   component.onSubmit();
   tick();
   expect(spy).toHaveBeenCalled();
   //expect(subSpy).toHaveBeenCalled();
 }));

 it('unit test to check login works ',fakeAsync(()=>{
  mockList.forEach(item => {
    item.firstName = "t";
    item.lastName ="p";
  })
  let spy = spyOn(service,'onSubmit').and.returnValue(of([mockLst]));
  //let subSpy = spyOn(service.onSubmit(),'subscribe');
  component.onSubmit();
  tick();
  expect(spy).toHaveBeenCalled();
  //expect(subSpy).toHaveBeenCalled();
}));



});
