import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-application3',
  templateUrl: './application3.component.html',
  styleUrls: ['./application3.component.css']
})
export class Application3Component implements OnInit {
  tab1 = [15, 46, 0, 89, 80];
  titre: String = "les tableau avec ngFor et ngIf";
  couleur: String = "red"; 
  style : String="italic"
  constructor() { }
  onposition (x:number)
  {
    console.log("tu es en position " + x); 
  }

  ngOnInit(): void {
  }

}
