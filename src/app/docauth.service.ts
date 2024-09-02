import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username=="doctor"&& password=="doc@12"){
      sessionStorage.setItem('username',username);
      
       return true;
     }else{
      
        return false;
     }
  }
  isUserLoggedIn(){
    console.log("doctor login ho gya")
   let user= sessionStorage.getItem('username');
    return !(user==null)
  }
  logout(){
    console.log("doctor logout go gya")
    sessionStorage.removeItem('username');
  }
}
