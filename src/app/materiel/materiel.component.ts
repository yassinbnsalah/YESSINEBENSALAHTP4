import { Commentaire } from './../models/commentaire';
import { Materiel } from './../models/matriels';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'YES-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input() com: Commentaire = new Commentaire("", 0,""); 
  @Input() mat: Materiel  = new Materiel("", "", "", "", 0, "", false, 0); 
  constructor() { }

  ngOnInit(): void {
  }

}
