//import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { LoginFormData, LoginResponse } from './login.type';
// import { registerData } from '../register/register.type';
 import { Observable } from 'rxjs';
//import { tap } from 'rxjs/operators';
//import { CookieService } from 'ngx-cookie-service';

export const AUTH_KEY ='auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    //private cookieservice:CookieService,
    ) { }

    // getAuthToken(){
    //   return this.cookieservice
    //   .get(AUTH_KEY);
    // }
  
  //login(data:any){
    //   const params = new HttpParams()
    //   .set('username',data.username)
    //   .set('password',data.password);
      
    //   return ((this.http.post('http://localhost:3000/submit',data, {
    //      params,
    //  }) as unknown) as Observable<LoginResponse>).pipe(
    //   tap((res)=>{
    //        this.cookieservice.set(AUTH_KEY, res.id,
    //         {
    //           path:'/',
    //           expires: new Date(2023,12,28),
    //         })
    //   })
    //  )
     
  //}


}
