import { Commentaire } from './../models/commentaire';
import { Materiel } from './../models/matriels';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'YES-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {
  @Input() mat: Materiel = new Materiel();
  showing:boolean = true; 
  constructor() { }
  onshow()
  {
    this.showing = !this.showing; 
  }
  ngOnInit(): void {
  }

}
