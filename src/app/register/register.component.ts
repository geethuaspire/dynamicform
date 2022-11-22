import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators ,AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
//import { ConfirmPasswordValidator } from './confirm-password.validator';
import { RegisterService } from './register.service';
import { UsernameValidators } from '../shared/validator/username.validator';
import { PasswordValidators } from '../shared/validator/password.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})


export class RegisterComponent implements OnInit {




 // usernameRequiredError = "This Field is Required";
 // usernameSpaceError ="Should not contain spaces";
 // passwordRequired ="This Field is Required";
 // passwordShouldStrong = "Require minimum 6 characters";
  // isSubmitted = false;
  // registerForm = new FormGroup(
  //   {
  //   firstName : new FormControl('' , Validators.required),
  //   lastName :new FormControl('' , Validators.required),
  //   username : new FormControl('' , [Validators.required, UsernameValidators.shouldNotContainSpaces]),
  //   password : new FormControl('', [Validators.required,PasswordValidators.shouldBeStrong(6)]),
  //  //  password : new FormControl('' , [
  //                                  // Validators.required,
  //                                  ////  Validators.minLength(6),
  //                                  //  Validators.maxLength(30),
  //                                   //  Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
  //                                 // ]
  //                           //  ),
  //   confirm_password : new FormControl('' ,[Validators.required],
  //                                          // Validators.minLength(6),
  //                                          //// Validators.maxLength(30),
  //                                           // Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")
  //                                         //]
  //                                     ),
  //   Age: new FormControl('' , Validators.required),
  //   email : new FormControl('' ,[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  //   phone: new FormControl('' ,[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  //   gender: new FormControl( '', Validators.required),
  //   // gender: ['male', [Validators.required]]
  //   },







    // {
    //  validator: ConfirmPasswordValidator("password", "confirm_password")
    // }
  //  );

// get firstName() {
//   return this.registerForm.
//   get('firstName')!;
// }
// get lastName() {
//   return this.registerForm.
//   get('lastName')!;
// }
// get username() {
//   return this.registerForm.
//   get('username')!;
// }
// get password() {
//   return this.registerForm.
//   get('password')!;
// }
// get confirm_password() {
//   return this.registerForm.
//   get('confirm_password')!;
// }
// get Age() {
//   return this.registerForm.
//   get('Age')!;
// }
// get email() {
//   return this.registerForm.
//   get('email')!;
// }
// get phone() {
//   return this.registerForm.
//   get('phone')!;
// }
// get gender(){
//   return this.registerForm.
//    get('gender')!;
// }
// //get fm(){
// //  return this.registerForm.controls;
// //}


// getUsernameError(){

//    if(this.username.hasError('required')){
//     return 'This Field is Required'
//   // return this.usernameRequiredError;
//    }
//    if(this.username.hasError('shouldNotContainSpaces')){
//     return 'Should not contain spaces';
//   // return this.usernameSpaceError;
//    }
//    return null;

// }

// getPasswordError(){
//   if(this.password.hasError('required')){
//     return 'This Field is Required';
//    // return this.passwordRequired;
//   }
//   if(this.password.hasError('shouldBeStrong')){
//     const errors = this.password.errors?.['shouldBeStrong'];
//     const requiredLength = errors.requiredLength;
//      return `Require minimum ${requiredLength} characters`
//    //return `Require minimum 6 characters`
//   //  return this.passwordShouldStrong;
//   }
//   return null;
// }  




   registrationForm!:FormGroup;
   dynamicFormArray:any;
  constructor(
    private registerservice:RegisterService,
    private router : Router,
    private fb:FormBuilder,
  ) { }
   response:any;
  ngOnInit(): void {


    this.registrationForm = this.fb.group({

    });


    this.registerservice.getData()
    .subscribe(data=>{
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray);

      this.createFormControl();
    });
  }


createFormControl(){
  this.dynamicFormArray.forEach((element: any) => {
    if(element.Required === true){
      this.registrationForm.addControl(element.ID,new FormControl('',Validators.required));
    }
    else{
      this.registrationForm.addControl(element.ID,new FormControl(''));
    }
  });
  console.log("Registration form",this.registrationForm);
}


  onSubmit(){
    this.router.navigateByUrl('/login');
    console.log("Submit Successfully");
    //console.log(this.registerForm.value);
  // let post_response = this.registerForm.value

  this.registerservice.postData(this.registrationForm.value).
   subscribe(res=>{
    console.log("Registration form valuest for posting:",res);
  
    })
  }
}
