import { Routes } from '@angular/router';
import { Layout } from './Features/layout/layout';
import { Login } from './Features/Authentication/login/login';
import { ForgetPassword } from './Features/Authentication/forget-password/forget-password';
import { Dashboard } from './Features/dashboard/dashboard';
import { authGuardGuard } from './Core/Guards/auth-guard-guard';

export const routes: Routes = [
    {path:'' , component:Layout , title:'Authentication' , children:[
        {path: '' , component:Login , title:'Login'},
        {path:'forget-password' ,component:ForgetPassword , title:'forget-password'}
    ]},
    {path:'dashboard' ,canActivate:[authGuardGuard] ,component:Dashboard , title:'Dashboard'}
  

];
