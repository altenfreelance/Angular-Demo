import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers;
  constructor(private service: GithubService) { }

  ngOnInit() {
    this.service.getAll().subscribe(followers => this.followers = followers)
  }

}
