import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from './../models/commentaire';
import { Materiel } from './../models/matriels';
@Component({
  selector: 'YES-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {

  @Input() det: Materiel = new Materiel();
  showing:boolean = true; 
  constructor() { }
  onshow()
  {
    this.showing = !this.showing; 
  }
  ngOnInit(): void {
  }

}
