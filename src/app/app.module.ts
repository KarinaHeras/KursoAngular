import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { HeaderModule } from './header/header.module';
import { PostComponent } from './header/post/post.component';
import { PostsComponent } from './login/posts/posts.component';
import { PrivatePostsComponent } from './login/private-posts/private-posts.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { TokenInterceptorService } from './service/token-interceptor.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'header', pathMatch: 'full' },
  { path: 'header', component: PostComponent },
  { path: '**', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PostsComponent,
    PrivatePostsComponent,

  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService ,
      multi: true
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
