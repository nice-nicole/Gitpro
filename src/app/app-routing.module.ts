import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { GitFormComponent } from './git-form/git-form.component';



const routes: Routes = [
  {path:'user', component:UserComponent},
  {path:'git-form', component: GitFormComponent},
  {path:'user/:username', component: UserComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
