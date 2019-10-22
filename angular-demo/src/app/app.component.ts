import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-demo';
  tweets = [
    {
    body: 'The body of a tweet...',
    isLiked: false,
    likesCount: 0
  },
  {
    body: 'The body of a tweet...',
    isLiked: true,
    likesCount: 1
  },
  {
    body: 'The body of a tweet...',
    isLiked: false,
    likesCount: 2
  }]
}
