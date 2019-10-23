import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css']
})
export class CoursesFormComponent {

  categories = [
    {
      name: 'Development',
      id:1
    },
    {
      name: 'Art',
      id:2
    },
    {
      name: 'Languages',
      id:3
    }
  ] 

  onSubmit(f){
    console.log(f)
  }

}
