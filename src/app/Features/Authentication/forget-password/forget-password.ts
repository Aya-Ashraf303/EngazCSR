import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-forget-password',
  imports: [InputTextModule,CheckboxModule,ButtonModule,RouterLink],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
})
export class ForgetPassword {

}
