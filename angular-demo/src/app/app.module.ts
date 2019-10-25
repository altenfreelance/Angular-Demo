import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './services/authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlerComponent } from './titler/titler.component';
import { TitleCustomPipe } from './title-custom.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { PasswordChangerComponent } from './password-changer/password-changer.component';
import { PlaceholderPostsComponent } from './placeholder-posts/placeholder-posts.component';
import {AppErrorHandler} from './common/app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    FavoriteComponent,
    TitlerComponent,
    TitleCustomPipe,
    LikeComponent,
    ZippyComponent,
    CoursesFormComponent,
    PasswordChangerComponent,
    PlaceholderPostsComponent,
    GithubFollowersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngModel for two way binding
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthorsService,
    {provide:ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
