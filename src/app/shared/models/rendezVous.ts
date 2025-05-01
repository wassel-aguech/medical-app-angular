import { Medecin } from "./medecin";

export class RendezVous{

  id! : number;
  motif! : String;
  dateEnvoie! : Date;
  dateDemande! : Date;
  dateRendezVous! : Date;;
  status!: String;


  patiendid! : number;
  medecinid! : number;
  medecinName! : String;
}
