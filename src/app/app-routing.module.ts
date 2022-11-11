import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:'contact_details',
    component:ContactDetailsComponent
  },
  {
    path:'contact_details/:id',
    component:ContactDetailsComponent
  },
  {
    path:'**',
   // component:RegisterComponent
  component:LoginComponent
  },
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
