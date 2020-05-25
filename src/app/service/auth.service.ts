import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient, private router: Router) { }

  private URL = 'http://localhost:3000/api';


signUp(user){

  return this.http.post<any>(this.URL + '/signUp', user);
}

signIn(user){
 return this.http.post<any>(this.URL + '/signin', user);
}
// metodo para saber si el usuario esta logeado
loggedIn(){
  return !!localStorage.getItem('token');
  // if (localStorage.getItem('token')){
  //   return true;
  // }

}

// este metodo retornar el token que se ha guardado
getToken(){
  return localStorage.getItem('token');

}
// cerrar sesion, elimina el token y asi elimina los datos del usuario
logout(){
  localStorage.removeItem('token');
  return this.router.navigate(['/signin']);
}

}
