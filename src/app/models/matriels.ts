import { Commentaire }
from './commentaire';
export class Materiel {
      id:string;
      libelle:string;
      photo: string;
      marque: string;
      prix: number;
      description: string;
     hautGamme: boolean;
      quantite: number;
    commentaires: Commentaire[];
  constructor() { } 
  //constructor(public _id: string, public _libelle: string, public _photo: string, public _marque: string, public _prix: number, public _description: string , public _hautGamme : boolean , public _quantite : number) {}
}