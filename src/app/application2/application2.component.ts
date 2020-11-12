import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-application2',
  templateUrl: './application2.component.html',
  styleUrls: ['./application2.component.css']
})
export class Application2Component implements OnInit {
  tab = [15, 46, 0, 89, 80];
  titre: String = "les tableau avec ngFor et ngIf";
  constructor() { }

  ngOnInit(): void {
  }

}
