import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { PostsComponent } from './login/posts/posts.component';
import { PrivatePostsComponent } from './login/private-posts/private-posts.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';

// login
const routes: Routes = [
{
  path: '',
  redirectTo : '/posts',
  pathMatch : 'full'
},
{
  path: 'posts',
  component: PostsComponent
},
{
  path: 'private',
  component: PrivatePostsComponent,
  canActivate: [AuthGuard]
},
{
  path: 'signup',
  component: SignupComponent
},
{
  path: 'signin',
  component:  SigninComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
