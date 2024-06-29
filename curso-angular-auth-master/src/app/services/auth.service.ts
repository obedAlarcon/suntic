import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { switchMap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
    private api= environment.API_URL
  
  constructor(private http:HttpClient) { }

  login(email:string, password:string){
   

    return this.http.post(`${this.api}/api/v1/auth/login`, { //peticion api del login
      email,
      password
    })
  }

  // este es el servicio para registrarse
  register( name:string, email:string, password:string){
    return this.http.post(`${this.api}/api/v1/auth/register`,{ // peticion api del registro
    
      name,
      email,
      password,
 
    })

  }
   

     registerAndLogin(name:string, email:string, password:string){
      return this.register(name, email, password)
      .pipe(
        switchMap(()=> this.login(email, password))  //a quie si el registro es Ok lo madamos al boars directamente
      )

     }

    // validamos si el correo ya esta registrado o no
    
    isAvailable( email:string){

      return this.http.post<{isAvailable:boolean}>(`${this.api}/api/v1/auth/is-available`,{
        email
      })

    }

  recovery(email:string ){
    return this.http.post(`${this.api}/api/v1/auth/recovery`, { email })

  }


  changePassword(token:string, newPassword:string){
  return this.http.post(`${this.api}/api/v1/auth/change-password`, {token , newPassword})

  }

}
