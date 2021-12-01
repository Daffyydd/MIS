import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';
import { LoginComponent } from './modules/account/login/login.component';
import { ForgotPasswordComponent } from './modules/account/forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { NonAuthGuard } from './guards/non-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NonAuthGuard]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
