import { Component } from '@angular/core';
import { Sidebar } from "../sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { Login } from "../Authentication/login/login";
import { MainComponent } from "../main-component/main-component";

@Component({
  selector: 'app-dashboard',
  imports: [Sidebar, RouterOutlet, Login, MainComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
