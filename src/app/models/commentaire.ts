export class Commentaire {
  public get contenu(): string {
    return this._contenu;
  }
  public set contenu(value: string) {
    this._contenu = value;
  }
  public get note(): number {
    return this._note; 
  }
  public set note(value: number) 
  {
    this._note = value; 
  }
  public get auteur(): string {
    return this._auteur;
  }
  public set auteur(value: string) {
    this._auteur = value;
  }
  /*public get date(): Date {
    return this.date;
  }
  public set date(value: Date)
  {
    this._date = value; 
  }*/
 
  constructor (private _contenu : string, private _note : number ,private _auteur :string){ }  
}
