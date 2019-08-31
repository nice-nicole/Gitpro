import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'users/:username', component: UserComponent },
  // { path: '', component:AccessFormComponent}
  { path: 'users/:username', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
