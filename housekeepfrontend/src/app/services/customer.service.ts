import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllCustomer } from '../models/allcustomer';
import { IAllWorkRequest } from '../models/allworkrequest';
import { ILoginData } from '../models/logindata';
import { IGetPassword } from '../models/password';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private _http:HttpClient) { }

  CustomerLogin(loginData:ILoginData){
    let dataVar=this._http.post<number>('http://127.0.0.1:8000/customerlogin',loginData);
    return dataVar;
  }
  VerifyPassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.post<number>('http://127.0.0.1:8000/verifycustpassword',vpassword);
    return pass;
  }
  ChangePassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.put<number>('http://127.0.0.1:8000/changecupassword',vpassword);
    return pass;
  }
  GetIdFromEmail(email:string):Observable<number>{
    let id = this._http.get<number>('http://127.0.0.1:8000/custidbyemail/'+email);
    return id;
  }
  GetAllWorkRequest(customer:number):Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetallbyusercompleted/'+customer);
    return work;
  }
  GetUserData(customer:number):Observable<IAllCustomer[]>{
    let work = this._http.get<IAllCustomer[]>('http://127.0.0.1:8000/getcustomerbyid/'+customer);
    return work;
  }
  EditCustomer(editCustomer:IAllCustomer):Observable<number>{
    let editc = this._http.put<number>('http://127.0.0.1:8000/customerupdate',editCustomer);
    return editc;
  }

  GetAllWorkRequestNotCompleted(customer:number):Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetallbyusernotcompleted/'+customer);
    return work;
  }
  
}
