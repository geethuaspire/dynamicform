import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, Validators, RequiredValidator, FormControl } from '@angular/forms';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { mockList } from '../mock/login.mock';
import { RegisterComponent } from '../register/register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ContactsComponent } from '../contacts/contacts.component';
import { UsernameValidators } from '../shared/validator/username.validator';
import { createPlatform } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLst = mockList;
  let service:LoginService;
  const control = new FormControl();
  //let routerSpy : { navigateByUrl : jasmine.Spy}


  beforeEach( () => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
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
   component.onSubmit();
   tick();
   expect(spy).toHaveBeenCalled();
 }));

 it('unit test to check login works ',fakeAsync(()=>{
  mockList.forEach(item => {
    item.firstName = "t";
    item.lastName ="p";
  })
  let spy = spyOn(service,'onSubmit').and.returnValue(of([mockLst]));
  component.onSubmit();
  tick();
  expect(spy).toHaveBeenCalled();
}));

it('should navigate to contacts', inject([Router], (router: Router) => {
  spyOn(router, 'navigateByUrl');
  component.onSubmit();
  component.getContacts();
  expect(router.navigateByUrl).toHaveBeenCalledWith('/contacts');
}));

it('should navigate to register', inject([Router] , (router:Router) =>{
  spyOn(router , 'navigateByUrl');
  component.onSubmit();
  component.getRegister();
  expect(router.navigateByUrl).toHaveBeenCalledWith('/register');
}));



// it('form invalid when empty', () => {
//   component.loginForm.controls.username.setValue('');
//   component.loginForm.controls.password.setValue('');
//   expect(component.loginForm.valid).toBeFalsy();
// });

// it('username field validity', () => {
//   const username = component.loginForm.controls.username;
//   expect(username.valid).toBeFalsy();
//   username.setValue('');
//   expect(username.hasError('required')).toBeTruthy();
// });

// it('password field validity', () => {
//   const password = component.loginForm.controls.password;
//   expect(password.valid).toBeFalsy();
//   password.setValue('');
//   expect(password.hasError('required')).toBeTruthy();
// });


it('form should be valid', () => {
  component.loginForm.controls.username.setValue('Liya');
  component.loginForm.controls.password.setValue('liyaliya');
});



// it('should return message if username is required', () => {
//  control.setValue('This Field is Required');
//  // expect(validateUrl(control)).toBeNull();
 
// });
 

//  it('Should mark username as invalid when it has no value',()=>{
//    const ctrl = component.loginForm.get('username');
//    ctrl?.setValue(null);
//    fixture.detectChanges();
//    expect(ctrl?.invalid).toBeTruthy();
// });

it('should check username field is required',()=>{
  var result = component.getUsernameError();
  expect(result).toBe("This Field is Required");
 });

//  it('should check username contain space',()=>{
//      var result = component.getUsernameError();
//      expect(result).toBe('Should not contain Spaces');
//  })

it('should check password error', ()=>{
 var result = component.getPasswordError();
 var val = "This Field is Required"
 expect(result).toBe(val);
 }); 
 


// it('should mark password as invalid when it has value lesser than 6 characters',()=>{
//      const ctrl = component.loginForm.get('password');
//      ctrl?.setValue('1234');
//      fixture.detectChanges();
//      expect(ctrl?.invalid).toBeTruthy();
// });
// it('should mark password as valid when it has value minimum 6 characters',()=>{
//   const ctrl = component.loginForm.get('password');
//   ctrl?.setValue('123456');
//   fixture.detectChanges();
//   expect(ctrl?.valid).toBeTruthy();
// })



// it('username should not contain spaces',()=>{
//   component.usernameShouldContainSpace;
// })

// it('should check password error',()=>{
//   component.getPasswordError();
// });
// it('password should be required',()=>{
//   component.passwordRequired;
// });
// it('Password should be strong',()=>{
//   component.passwordShoulBeStrong;
// })

});
