import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl:string='http://localhost:8080/user'
  constructor(private httpClient:HttpClient) { }

  edit(email:string,name:string,password:string){
    return this.httpClient.put<void>(this.apiUrl,{
      email,
      name,
      password
    })
  }
  delete(email:string){
    const params = new HttpParams().set('email',email)
    return this.httpClient.delete<void>(this.apiUrl,{params})
  }
}
