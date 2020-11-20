import { Commentaire } from './../models/commentaire';
import { Materiel } from './../models/matriels';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'YES-listematriel',
  templateUrl: './listematriel.component.html',
  styleUrls: ['./listematriel.component.css']
})
export class ListematrielComponent implements OnInit {
  titre: String = "nos produit en informatique"; 
  /*commentaires: Commentaire[] = [
    new Commentaire('satisfaisant',3,'Sami MRAD'),
    new Commentaire('Bon rapport qualité prix', 4, 'Amira Salah')]*/
  materiels : Materiel []=[
    new Materiel('1', 'Ecran', 'assets/Images/Informatique/ecran.png', 'LG', 400.3, 'Ecran de dernière génération', true, 10),
    new Materiel('2', 'PC', 'assets/Images/Informatique/pcFixe.jpg', 'HP', 1780.6, 'PC Portable très pratique', false, 5),
    new Materiel('3', 'Scanner', 'assets/Images/Informatique/scanner.jpg', 'hp', 380.5, 'Scanner Ultra rapide', true, 0),
    new Materiel('4', 'Imprimante', 'assets/Images/Informatique/imprimante.jpg', 'Canon', 420.5, 'Imprimante multifonctions avec kit', false, 1),
    new Materiel('5', 'PC Portable', 'assets/Images/Informatique/pcPortable.png', 'Dell', 2250,  'PC Portable très performant', true, 2)

  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
