import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitlerComponent } from './titler/titler.component';
import { TitleCustomPipe } from './title-custom.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { PasswordChangerComponent } from './password-changer/password-changer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ngModel for two way binding
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
