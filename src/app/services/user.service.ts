import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string='http://localhost:8080/user'
  constructor(private httpClient:HttpClient) { }

  edit(email:string|null,name:string,password:string,newPassword:string){
    return this.httpClient.put<void>(this.apiUrl,{
      email,
      name,
      password,
      newPassword
    })
  }
  delete(email:string|null){
    if(email !== null){
      return this.httpClient.delete<void>(this.apiUrl+'/'+email)
    }
    throw new Error
  }
}
