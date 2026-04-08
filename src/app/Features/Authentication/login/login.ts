import { Component } from '@angular/core';
import { AuthService } from '../../../Core/Services/auth-service';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [InputTextModule,CheckboxModule,ButtonModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
constructor(private _authservice : AuthService , private _router :Router){}
onSubmit()
  {
      localStorage.setItem('isLoggedin' , JSON.stringify(!this._authservice.isLogged()));
    this._router.navigate(['/dashboard'])
    }
}
