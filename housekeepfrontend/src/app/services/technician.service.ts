import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllService } from '../models/allservices';
import { IAllWorkRequest } from '../models/allworkrequest';
import { IEditAcceptance } from '../models/editacceptance';
import { IEditPayment } from '../models/editpayment';
import { IEditPrice } from '../models/editprice';
import { IEditWorkstatus } from '../models/editworkstatus';
import { ILoginData } from '../models/logindata';
import { IGetPassword } from '../models/password';
import { ITechnicianRegData } from '../models/technicianregister';

@Injectable({
  providedIn: 'root'
})
export class TechnicianService {

  constructor(private _http:HttpClient) { }

  technicianLogin(loginData:ILoginData){
    let dataVar=this._http.post<number>('http://127.0.0.1:8000/technicianlogin',loginData);
    return dataVar;
  }

  VerifyPassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.post<number>('http://127.0.0.1:8000/verifytechpassword',vpassword);
    return pass;
  }
  ChangePassword(vpassword:IGetPassword):Observable<number>{
    let pass = this._http.put<number>('http://127.0.0.1:8000/changetechpassword',vpassword);
    return pass;
  }

  GetIdFromEmail(email:string):Observable<number>{
    let id = this._http.get<number>('http://127.0.0.1:8000/techidbyemail/'+email);
    return id;
  }

  GetServiceFromId(sid:number):Observable<number>{
    let service = this._http.get<number>('http://127.0.0.1:8000/getservicebyid/'+sid);
    return service;
  }

  GetAllWorkRequest(technician:number):Observable<IAllWorkRequest[]>{
    let work = this._http.get<IAllWorkRequest[]>('http://127.0.0.1:8000/workrequestgetallbytechnician/'+technician);
    return work;
  }

  EditWorkStatus(editWorkstatus:IEditWorkstatus):Observable<number>{
    let editws = this._http.put<number>('http://127.0.0.1:8000/updateworkstatus',editWorkstatus);
    return editws;
  }

  EditAcceptancestatus(editAcceptance:IEditAcceptance):Observable<number>{
    let editac = this._http.put<number>('http://127.0.0.1:8000/updateacceptance',editAcceptance);
    return editac;
  }
  EditPrice(editPrice:IEditPrice):Observable<number>{
    let editp = this._http.put<number>('http://127.0.0.1:8000/updatecost',editPrice);
    return editp;
  }
  EditPayment(editPayment:IEditPayment):Observable<number>{
    let editpay = this._http.put<number>('http://127.0.0.1:8000/updatepayment',editPayment);
    return editpay;
  }
  RegisterTechnician(techRegister:ITechnicianRegData):Observable<number>{
    let register=this._http.post<number>('http://127.0.0.1:8000/admintechnician',techRegister);
    return register;
  }

  GetService():Observable<AllService[]>{
    let service = this._http.get<AllService[]>('http://127.0.0.1:8000/adminservice');
    return service;
  }
}
