import { switchMap } from 'rxjs/operators';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { EnkantService } from '../enkant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { plat } from '../plat';



@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  
  @Output() event = new EventEmitter<string>();
  @Input() day: any = 0;
  @Input() etatPanier: boolean  = false;
  ngOnChanges() {
    if ( this.firstTime == false)
    {
    this.liste = [];
    this.key = [];
    this.getPlats();
    }else{
      this.firstTime = false;
    }
    
}
  Hide : boolean = true ;
  liste: any[] = [];
  key : any[] = [];
  Dliste: any[] = [];
  plat:plat[];
  Ddonnees : any[] = [];
  firstTime : boolean = true ;
  hidePanier : boolean = false ;
  Panier :any[]= [];
  total : number = 0;
  constructor(private enkantService: EnkantService) { }

  ngOnInit() {
    if (this.etatPanier == false)
    {
      this.getPlats();  
    }
    else
    {
      this.hidePanier = true;
      this.getPanier();
    }
    
    console.log(this.day);
  }

  getPlats() {
    if("false" == sessionStorage.getItem('HIDE'))
      {
        this.Hide=false;
      }

    this.enkantService.getdays()
    .subscribe(data => {
      //console.log(data);
      let cle = Object.keys(data);
      this.Ddonnees = Object.values(data);
      this.Dliste = [];
      for(let i = 0; i < cle.length; i++){
        this.Dliste.push({key: cle[i], values:this.Ddonnees[i]});
      }
      console.log(this.Ddonnees[this.day]);
      console.log(this.Dliste);
     }); 
    this.enkantService.getPlats()
    .subscribe(data => {
      //console.log(data);
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      let Platjour = this.Dliste[this.day].values;
      console.log("Platjour : " + Platjour);
      let PlatjourSplit = Platjour.split(',');
      console.log(PlatjourSplit);
      for(let i = 0; i < PlatjourSplit.length; i++){
        this.liste.push(donnees[cle.indexOf(PlatjourSplit[i])]);
        this.key.push(PlatjourSplit[i]);
      }
      console.log(this.liste)
      
     }); 
   }



   ajoutPanier(key){
    console.log(key);
    this.enkantService.getPlat(key)
    .subscribe((data : any) => {
      
      this.Panier.push(key);

      this.total =  this.total + data.price;
      
      console.log("prix " + data.price);
      console.log("panier "+this.Panier);
      console.log("total "+this.total);
      sessionStorage.setItem('total',this.total.toString());
      sessionStorage.setItem('panier',this.Panier.toString());
      this.event.emit("");
    });
   
    

    console.log(this.Panier);

  }
  

  getPanier() {

    console.log("Pannier");
    console.log(this.Panier);
    this.enkantService.getPlats()
    .subscribe(data => {
      //console.log(data);
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      let Platjour = sessionStorage.getItem('panier');
      console.log("Platjour : " + Platjour);
      let PlatjourSplit = Platjour.split(',');
      console.log(PlatjourSplit.length);
      for(let i = 0; i < PlatjourSplit.length; i++){
        this.liste.push(donnees[cle.indexOf(PlatjourSplit[i])]);
        this.key.push(PlatjourSplit[i]);
       
      }
      console.log(this.liste)
      console.log('fin panier')
     }); 
   }

   deletePanier(key){
    console.log(key)
   // console.log(this.liste.name.indexOf('plat1'))
    
   // this.liste = this.liste.filter(liste => liste !== key);
     
     //this.liste.push();

    }

  // deleteplats(key){
  //   this.enkantService.deletePlats(key).subscribe();sessionStorage.getItem('user')
  //   this.liste = this.liste.filter(liste => liste.key !== key);
  // }



}
