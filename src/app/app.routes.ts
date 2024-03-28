import { Routes } from '@angular/router';
import { AccueilComponent } from './public/accueil/accueil.component';
import { RegisterComponent } from './public/register/register.component';
import { JourneeRemehbsComponent } from './public/journee-remehbs/journee-remehbs.component';
import { RemehbsComponent } from './public/remehbs/remehbs.component';
import { LoginComponent } from './public/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'remehbs', pathMatch: 'full' }, //redirection vers
  {
    path: 'remehbs',
    component: RemehbsComponent,
    children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
      { path: 'accueil', component: AccueilComponent },
      { path: 'journee-remehbs', component: JourneeRemehbsComponent },
    ],
  },
  { path: 'remehbs-register', component: RegisterComponent },
  { path: 'remehbs-login', component: LoginComponent },
];
