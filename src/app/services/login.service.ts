import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse, registerResponse } from '../types/loginResponse.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl:string="http://localhost:8080"
  constructor(private httpClient:HttpClient) { 
  
  }
  login(email:string, password:string){
    return this.httpClient.post<loginResponse>(this.apiUrl+'/auth/login',{
      email,
      password
    }).pipe(tap(value=>{
      sessionStorage.setItem("auth-token",value.token)
      sessionStorage.setItem("userName",value.name)
      sessionStorage.setItem("userEmail",email)
    }))
  }
  register(name:string,email:string,password:string){
    return this.httpClient.post<registerResponse>(this.apiUrl+'/auth/register',{
      name,
      email,
      password
    })
  }
  logout(){
    sessionStorage.setItem("auth-token",'')
    sessionStorage.setItem("userName",'')
    sessionStorage.setItem("userEmail",'')
  }
}
