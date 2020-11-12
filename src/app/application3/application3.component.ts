import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-application3',
  templateUrl: './application3.component.html',
  styleUrls: ['./application3.component.css']
})
export class Application3Component implements OnInit {
  tab1 = [15, 46, 0, 89, 80];
  titre: String = "les tableau avec ngFor et ngIf";
  constructor() { }

  ngOnInit(): void {
  }

}
