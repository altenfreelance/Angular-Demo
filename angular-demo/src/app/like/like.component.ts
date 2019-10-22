import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;
  
  onClick(){
    this.isActive ? this.likesCount-- : this.likesCount++
    this.isActive = !this.isActive
  }

}
