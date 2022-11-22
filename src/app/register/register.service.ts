import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { registerData } from './register.type';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http:HttpClient,
  ) { }

  getData(){
    return this.http.get("http://localhost:3000/register");
  }
  postData(value:any){
    return this.http.post<registerData>("http://localhost:3000/submit", value);
  }

}
