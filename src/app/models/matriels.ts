import { Commentaire }
from './commentaire';
export class Materiel {
  public get id(): string {
    return this._id;
  }
  public set id(value: string) {
    this._id = value;
  }

  public get libelle(): string{
    return this._libelle; 
  }
  public set libelle(value: string)
  {
    this.libelle = value; 
  }
  public get photo(): string 
  {
    return this._photo; 
  }
  public set photo(value: string)
  {
    this._photo = value; 
  }
  public get marque(): string 
  {
    return this._marque; 
  }
  public set marque(value: string)
  {
    this._marque = value; 
  }
  public get description(): string 
  {
    return this._description; 
  }
  public set description(value: string)
  {
    this._description = value; 
  }
  public get prix(): number 
  {
    return this._prix; 
  }
  public set prix(value: number)
  {
    this._prix = value; 
  }
  public get quantite(): number 
  {
    return this._quantite; 
  }
  public set quantite(value: number)
  {
    this._quantite = value; 
  }
  public get hautGamme(): boolean{
    return this._hautGamme; 
  }
  public set hautGamme(value: boolean)
  {
    this._hautGamme = value 
  }
  public get commentaires(): Commentaire{
    return this._commentaires; 
  }
  public set commentaires(value: Commentaire)
  {
    this._commentaires = value; 
  }
  constructor(public _id: string, public _libelle: string, public _photo: string, public _marque: string, public _prix: number, public _description: string , public _hautGamme : boolean , public _quantite : number , public _commentaires : Commentaire) {
    
  }

}
