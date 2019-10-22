import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titler',
  templateUrl: './titler.component.html',
  styleUrls: ['./titler.component.css']
})
export class TitlerComponent implements OnInit {
  title = ""
  constructor() { }

  ngOnInit() {
  }

}
