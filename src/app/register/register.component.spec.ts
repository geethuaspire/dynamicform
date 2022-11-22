
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync,inject, TestBed, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { mockData } from '../mock/register.mock';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let mockdta = mockData;
  let service:RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [ 
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{path:'login', component:LoginComponent}])
      ],
      providers:[ RegisterService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(RegisterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('unit test for subscribe method in register component',fakeAsync(()=>{
    let spy = spyOn(service,'postData').and.returnValue(of(mockdta))
    component.onSubmit();
    tick();
    expect(spy).toHaveBeenCalled();
  }));
  

  it('should call Router.navigateByUrl', inject([Router], (router: Router) => {
    spyOn(router, 'navigateByUrl');
    component.onSubmit();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  }));


  // it('form invalid when empty', () => {
  //   component.registerForm.controls.firstName.setValue('');
  //   component.registerForm.controls.lastName.setValue('');
  //   component.registerForm.controls.username.setValue('');
  //   component.registerForm.controls.password.setValue('');
  //   component.registerForm.controls.confirm_password.setValue('');
  //   component.registerForm.controls.Age.setValue('');
  //   component.registerForm.controls.email.setValue('');
  //   component.registerForm.controls.phone.setValue('');
  //   component.registerForm.controls.gender.setValue('');
  //   expect(component.registerForm.valid).toBeFalsy();
  // });
  

  // it('username field validity', () => {
  //   const firstName = component.registerForm.controls.username;
  //   expect(firstName.valid).toBeFalsy();
  //   firstName.setValue('');
  //   expect(firstName.hasError('required')).toBeTruthy();
  // });
  
  // it('username field validity', () => {
  //   const lastname = component.registerForm.controls.username;
  //   expect(lastname.valid).toBeFalsy();
  //   lastname.setValue('');
  //   expect(lastname.hasError('required')).toBeTruthy();
  // });
  
// it('should check username Required error',()=>{
//     expect(component.getUsernameError()).toBe('This Field is Required');
// });

//  it('should check username should not contain spaces',()=>{
//    if( mockdta.username = "saf"){
//     expect(component.getUsernameError()).toBe('Should not contain spaces');
//    }

//  });
//  it('should check password Required Error',()=>{
//   expect(component.getPasswordError()).toEqual('This Field is Required');
//  });
//  it('should check password should be strong',()=>{
//    expect(component.getPasswordError()).toBe('wrffasfsf')
//  })
   
});

