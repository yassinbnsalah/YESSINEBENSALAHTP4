import { Commentaire } from './../../models/commentaire';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'YES-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() com: Commentaire = new Commentaire();  
  constructor() { }

  ngOnInit(): void {
  }

}
