import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder-posts',
  templateUrl: './placeholder-posts.component.html',
  styleUrls: ['./placeholder-posts.component.css']
})
export class PlaceholderPostsComponent implements OnInit {
  posts: Object;
  url: string = 'http://jsonplaceholder.typicode.com/posts'
  
  constructor(private http: HttpClient) {
  }
      
  ngOnInit() {
    this.http.request('GET', this.url, {responseType: 'json'}).subscribe(response => {
      // console.log(response);
      this.posts = response;
    });
  }

}
