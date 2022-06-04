import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';


interface User{
  id: any;
  frtname: string;
  lastname: string;
  email : string;
}
  
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  url = 'http://localhost:3000/Datalist';
 
  constructor(private http:HttpClient) { }

  // getUser():Observable<User>{

  //   const headers = new HttpHeaders({
  //   'content-type':'application/json',
  //   'authenticationToken':'1234565'
  //   });
    
  //   return this.http.get<User>("http://localhost:3000/users",{headers : headers})
  // }

  // addUser(body: any):Observable<User>{
  //     return this.http.post<User>(" http://localhost:3000/users",body)
  // }

  // UpdateUser(data: any,id: number){
  //     return this.http.put<any>(" http://localhost:3000/users/",+id,data)
  //     .pipe(map((res:any)=>{
  //       return res;
  //     }))
  // }

  // DeleteUser(id:number) {
  //   return this.http.delete<any>(" http://localhost:3000/users/"+id)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  GetData(): Observable<any> {
    return this.http.get(this.url);
  }

  Postdata(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }

  DelData(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
  GetDataById(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  UpdateData(id:number,value:any) {
    return this.http.put(`${this.url}/${id}`,value);
  }
}
