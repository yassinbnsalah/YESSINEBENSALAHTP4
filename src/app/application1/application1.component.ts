import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-application1',
  templateUrl: './application1.component.html',
  styleUrls: ['./application1.component.css']
})
export class Application1Component  {
  titre: String = "les tableau"; 
  tab = [15, 46, 0, 89, 80];
  
  constructor() { }

  position (x:number)
  {
    console.log("tu es en position " + x); 
  }


}
