import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';


// este component Auth.gard es una naer de proteger las rutas
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private authService: AuthService, private router: Router){}

// este funcion es para saber si existe el token o no
canActivate(): boolean{
    if (this.authService.loggedIn()) {
      return true;
    }
    this.router.navigate(['/signin']);
    return false;

  }

  }


