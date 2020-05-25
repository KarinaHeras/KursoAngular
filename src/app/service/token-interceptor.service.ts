import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{

  constructor(private authservice: AuthService ) { }

  // para autenticacion se añade a la cabecera
  intercept(req, next){
   const tokenizeReq = req.clone({
      setHeader: {
        Autorization: `Bearer ${this.authservice.getToken()}`
      }
    });
   return next.handle(tokenizeReq);

  }



}
