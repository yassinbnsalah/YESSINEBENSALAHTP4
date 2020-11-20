import { Component, OnInit } from '@angular/core';
import { Materiel } from './../models/matriels';
@Component({
  selector: 'YES-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  materiel: Materiel[] = [
    new Materiel('2', 'PC', 'assets/Images/Informatique/pcFixe.jpg', 'HP', 1780.6, 'PC Portable très pratique', false, 5)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
