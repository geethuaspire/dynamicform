import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { UsernameValidators } from '../shared/validator/username.validator';
import { PasswordValidators } from '../shared/validator/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup<{ username: FormControl<string | null>; password: FormControl<string | null>; }>;
  
 //usernameRequired ='This Field is Required';
 // usernameShouldContainSpace ='Should not contain Spaces';
 // passwordRequired = 'This Field is Required';
 // passwordShoulBeStrong = 'Require minimum 6 characters';
  constructor(
   private router:Router,
   private loginservice:LoginService,
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl('',[
       Validators.required,
        UsernameValidators.shouldNotContainSpaces,
     ]),
      password:new FormControl('',[Validators.required,PasswordValidators.shouldBeStrong(6)]),
  });
 }
   
    get username(){
    return this.loginForm.get('username')!;
   }
   get password(){
    return this.loginForm.get('password')!;
   }
 
    getUsernameError(){
      if(this.username.hasError('required')){
        return 'This Field is Required'
       // return this.usernameRequired;
      }
      if(this.username.hasError('shouldNotContainSpaces')){
        return 'Should not contain Spaces'
      // return this.usernameShouldContainSpace;
      }
      return null;
    }

    getPasswordError(){
      if(this.password.hasError('required')){
       return 'This Field is Required'
      // this.passwordRequired;

      }
      if(this.password.hasError('shouldBeStrong')){
        const errors = this.password.errors?.['shouldBeStrong'];
       // const requiredLength = errors.requiredLength;
        // return `Require minimum ${requiredLength} characters`;
        return `Require minimum 6 characters`;
       // return this.passwordShoulBeStrong;
      }
      return null;
    }


   getContacts(){
      this.router.navigateByUrl('/contacts');
                }

   getRegister(){
      this.router.navigateByUrl('/register');
               }

    onSubmit(){
      this.loginservice.onSubmit().
         subscribe(res=>{
        const match = res.find((item:any)=>item.UserName == this.loginForm.controls.username.value && item.Password == this.loginForm.controls.password.value);
        if(match){
          console.log("success");
          this.getContacts();
                 }
        else{
          console.log("Failed");
          this.getRegister();
           }
        })
      }
    }
     
     

  
