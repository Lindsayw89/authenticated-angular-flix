import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignUpLoginComponent} from './sign-up-login/sign-up-login.component';
import {MainComponent} from './main/main.component';
import { AuthguardGuard } from './authguard.guard';


const routes: Routes = [
{path:'', component: SignUpLoginComponent},
{path: 'main', component: MainComponent, canActivate: [AuthguardGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }













// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
