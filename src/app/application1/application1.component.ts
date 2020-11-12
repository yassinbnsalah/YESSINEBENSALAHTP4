import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-application1',
  templateUrl: './application1.component.html',
  styleUrls: ['./application1.component.css']
})
export class Application1Component  {
  titre: String = "les tableau"; 
  tab = [15, 46, 0, 89, 80];
  couleur: String = "red"; 
  style: String = "italic";
  employe= {nom:'Mrad', prenom:'mohaMed AlI', date:new Date(1998,4,12), salaire: 687.56};
  constructor() { }

  onposition (x:number)
  {
    console.log("tu es en position " + x); 
  }


}
