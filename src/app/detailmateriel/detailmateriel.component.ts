import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from './../models/commentaire';
import { Materiel } from './../models/matriels';
@Component({
  selector: 'YES-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  @Input() com: Commentaire = new Commentaire("", 0,""); 
  @Input() det: Materiel  = new Materiel("", "", "", "", 0, "", false, 0,this.com);  /* materiel: Materiel[] = [
    new Materiel('2', 'PC', 'assets/Images/Informatique/pcFixe.jpg', 'HP', 1780.6, 'PC Portable très pratique', false, 5)
  ]*/
  constructor() { }

  ngOnInit(): void {
  }

}
