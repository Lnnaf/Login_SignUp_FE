import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AccountClass} from "../model/Account.class";

 const  baseURL ='http://localhost:8080/quanlytaikhoan'
@Injectable({
  providedIn: 'root'
})
export class AccountService{
  httpOptions: any;
  constructor(private  httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ` })
      , 'Access-Control-Allow-Origin': 'http://localhost:4200', 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }
  private _Accountlist : AccountClass[]= [];
  getAll():Observable<AccountClass[]>{
    return this.httpClient.get<AccountClass[]>(baseURL + '/index')
  }
  create(data: AccountClass) :Observable<AccountClass>{
    // @ts-ignore
    return  this.httpClient.post(baseURL + '/create',data)
  }

  edit(id: number, data: AccountClass):Observable<AccountClass>{
    // @ts-ignore
    return  this.httpClient.put(`${'http://localhost:8080/quanlytaikhoan'}/${data.idAccount}`, data)
  }
  delete(idaccount: number): Observable<any>{
      // @ts-ignore
    return  this.httpClient.delete(`${'http://localhost:8080/quanlytaikhoan/delete'}/${idaccount}`);
  }

  getOne(id: number): Observable<any> {
    // @ts-ignore
    return this.httpClient.get(`${'http://localhost:8080/quanlytaikhoan'}/${id}`);
  }

  get Accountlist() {
    return this._Accountlist;
  }

  set Accountlist(value) {
    this._Accountlist = value;
  }
}
