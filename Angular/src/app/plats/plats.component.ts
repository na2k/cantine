import { switchMap, count } from 'rxjs/operators';
import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { EnkantService } from '../enkant.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Plat }  from '../Plat';



@Component({
  selector: 'app-plats',
  templateUrl: './plats.component.html',
  styleUrls: ['./plats.component.css']
})
export class PlatsComponent implements OnInit {
  
  @Output() event = new EventEmitter<string>();
  @Input() day: string = '1';
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
  i : number = 0 ;
  liste: any[] = [];
  key : any[] = [];
  Dliste: any[] = [];
  plat: Plat[];
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

    
    this.enkantService.getPlats()
    .subscribe(data => {
       console.log(data);
       let cle = Object.keys(data);
       this.plat = Object.values(data);
       while ( this.i < this.plat.length)
       {
        console.log('-----');
        console.log(this.plat[this.i].jour.indexOf(this.day));
        if(this.plat[this.i].jour.indexOf(this.day) !== -1)
        {
          console.log(cle[this.i]);
          this.liste.push(this.plat[cle.indexOf(cle[this.i])]);
          this.key.push(cle[this.i]);
        }
        console.log('-----');
        console.log(this.day);
        console.log(this.plat[this.i].jour);
        console.log(this.key)
        console.log('Boucle '+this.i)



        this.i++;
       }
       this.i=0;
       

       // / ! \ LAISSER EN COMMENTAIRE, SERT DE REFERENCE  / ! \
       //
       //let Platjour = data.filter(data => data.jour !== this.day);
      // console.log("Platjour : " + Platjour);
      // let PlatjourSplit = Platjour.split(',');
      // console.log(PlatjourSplit);
      //  for(let i = 0; i < this.plat.length; i++){
      //    this.liste.push(this.plat[cle.indexOf(cle[i])]);
      //    this.key.push(this.plat[i]);
      //  }
      // console.log(this.liste)
      
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
    console.log('-------')
    console.log(key)
    this.liste.splice(key,1);
    console.log('-------')
    console.log(this.liste)


    }

  // deleteplats(key){
  //   this.enkantService.deletePlats(key).subscribe();sessionStorage.getItem('user')
  //   this.liste = this.liste.filter(liste => liste.key !== key);
  // }



}
