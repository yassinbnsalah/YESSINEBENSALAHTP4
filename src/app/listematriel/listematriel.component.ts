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
 /* com1: Commentaire[] = [
    new Commentaire('satisfaisant', 3, 'Sami MRAD',new Date(2020,11,4)),
    new Commentaire('Bon rapport qualité prix', 4, 'Amira Salah',new Date(2020,11,4))]; 
  com2: Commentaire[] = [];*/

 /* materiels : Materiel []=[
    new Materiel('1', 'Ecran', 'assets/Images/Informatique/ecran.png', 'LG', 400.3, 'Ecran de dernière génération', true, 10),
    new Materiel('2', 'PC', 'assets/Images/Informatique/pcFixe.jpg', 'HP', 1780.6, 'PC Portable très pratique', false, 5),
    new Materiel('3', 'Scanner', 'assets/Images/Informatique/scanner.jpg', 'hp', 380.5, 'Scanner Ultra rapide', true, 0),
    new Materiel('4', 'Imprimante', 'assets/Images/Informatique/imprimante.jpg', 'Canon', 420.5, 'Imprimante multifonctions avec kit',false, 1),
    new Materiel('5', 'PC Portable', 'assets/Images/Informatique/pcPortable.png', 'Dell', 2250,  'PC Portable très performant', true, 2)

  ]*/
  materiels:Materiel[]=[
    {   
        id: '1',
        libelle: 'Ecran',
        photo: 'assets/Images/Informatique/ecran.png',
        marque:'LG',
        prix:400.3,
        description: 'Ecran de dernière génération',
        hautGamme: true,
        quantite: 10,
        commentaires:[ {contenu:' satisfaisant', note:3, auteur:'Sami MRAD', date:new Date(2020,11,4)},
        {contenu:'Bon rapport qualité prix', note:4, auteur:'Amira Salah', date:new Date(2020,10,4)}]
     },
    {   
        id: '2', 
        libelle: 'PC', 
        photo:'assets/Images/Informatique/pcFixe.jpg',
        marque: 'HP', 
        prix: 1780.6, 
        description: 'PC Portable très pratique', 
        hautGamme: false,
        quantite: 5,
        commentaires:[ {contenu:' satisfaisant', note:3, auteur:'Sami MRAD', date:new Date(2020,11,4)},
        {contenu:'Bon rapport qualité prix', note:4, auteur:'Samar Salah', date:new Date(2020,10,4)}]
    },
    {   
        id: '3', 
        libelle: 'Scanner', 
        photo:'assets/Images/Informatique/scanner.jpg',
        marque: 'HP', 
        prix: 380.5, 
        description: 'Scanner Ultra rapide', 
        hautGamme: true,
        quantite: 0,
        commentaires:[]
    },
    {   
        id: '4', 
        libelle: 'Imprimante', 
        photo:'../assets/Images/Informatique/imprimante.jpg',
        marque: 'Canon', 
        prix: 420, 
        description: 'Imprimante multifonctions avec kit', 
        hautGamme: false,
        quantite: 1,
        commentaires:[]
    },
    {   
        id: '5', 
        libelle: 'PC Portable', 
        photo:'../assets/Images/Informatique/pcPortable.png',
        marque: 'Dell', 
        prix: 2250, 
        description: 'PC Portable très performant', 
        hautGamme: true,
        quantite: 2,
        commentaires:[]
    }

];
 /* materiel:Materiel[] =[{
    id: '2',
    libelle: 'PC',
    photo:'assets/Images/Informatique/pcFixe.jpg',
   marque: 'HP',
  prix: 1780.6,
  description: 'PC Portable très pratique',
  hautGamme: false,
  quantite: 5,
  commentaires:[
              {contenu:' satisfaisant', note:3, auteur:'Sami MRAD', date:new Date(2020,11,4)},
              {contenu:'Bon rapport qualité prix', note:4, auteur:'Samar Salah', date:new Date(2020,10,4)}]
  },
  {  
      id: '1',
      libelle: 'Ecran',
      photo: 'assets/Images/Informatique/ecran.png',
      marque:'LG',
      prix:400.3,
      description: 'Ecran de dernière génération',
      hautGamme: true,
      quantite: 10,
      commentaires:[ {contenu:' satisfaisant', note:3, auteur:'Sami MRAD', date:new Date(2020,11,4)},
      {contenu:'Bon rapport qualité prix', note:4, auteur:'Amira Salah', date:new Date(2020,10,4)}]
   
}];*/
  
  constructor() { }

  ngOnInit(): void {
  }

}
