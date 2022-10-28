import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UsernameValidators } from '../shared/validator/username.validator';
import { PasswordValidators } from '../shared/validator/password.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
   private router:Router,
   private http:HttpClient,
    ) { }

  ngOnInit(): void {
  }

   loginForm = new FormGroup({
       username:new FormControl('',[
        Validators.required,
         UsernameValidators.shouldNotContainSpaces,
      ]),
       password:new FormControl('',[Validators.required,PasswordValidators.shouldBeStrong(6)]),
   });
   get username(){
    return this.loginForm.get('username')!;
   }
   get password(){
    return this.loginForm.get('password')!;
   }


    getUsernameError(){
      if(this.username.hasError('required')){
        return 'This Field is Required'
      }
      if(this.username.hasError('shouldNotContainSpaces')){
        return 'Should not contain Spaces'
      }
      return null;
    }

    getPasswordError(){
      if(this.password.hasError('required')){
        return 'This Field is Required'
      }
      if(this.password.hasError('shouldBeStrong')){
        const errors = this.password.errors?.['shouldBeStrong'];
        const requiredLength = errors.requiredLength;
        return `Require minimum ${requiredLength} characters`;
      }
      return null;
    }


   onSubmit(){
  
        this.http.get<any>("http://localhost:3000/submit").
         subscribe(res=>{
        const match = res.find((item:any)=>item.username == this.loginForm.controls.username.value && item.password == this.loginForm.controls.password.value);
        
        if(match){
          console.log("success");
          this.router.navigateByUrl('/contacts')
                 }
        else{
          console.log("Failed");
          this.router.navigateByUrl('/register');
           }
        })
      }
    }
     
     

  
