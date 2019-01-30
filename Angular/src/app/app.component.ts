import { Component, OnInit } from '@angular/core';
import { EnkantService } from './enkant.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public HIDE = true;
  title = 'cantiniereProject';
  liste: any[] = [];
  key: string;
  user:Object;
  constructor(private enkantService: EnkantService) { }

  ngOnInit() {
    if (sessionStorage.getItem('user'))
    {
      this.HIDE=false;
  
        this.enkantService.getUser(sessionStorage.getItem('user'))
        .subscribe(data => {
         this.user = data;
         console.log(this.user);
        });

    }


    
    function horloge()
    {
      var date = new Date();
      if((date.getHours() == 10 && date.getMinutes()<30) || date.getHours() < 11)
      {
        $('#enable').slideDown('slow');
        $('#disable').slideUp('slow');
      }
      else
      {
        $('#enable').slideUp('slow');
        $('#disable').slideDown('slow');
      }
    }
    horloge();
  }

  onSubmit(form) {
    
    console.log('Tentative de connexion');
    console.log(form.form.value.email);
    console.log(form.form.value.mdp);

    this.enkantService.getUsers()
    .subscribe(data => {
      console.log(data);
      let cle = Object.keys(data);
      let donnees = Object.values(data);
      for(let i = 0; i < cle.length; i++){
        this.liste.push({key: cle[i], values:donnees[i]});
        if (donnees[i].email == form.form.value.email)
        {
          if (donnees[i].mdp == form.form.value.mdp)
          {
            console.log(donnees[i]);
            console.log(cle[i]);
            sessionStorage.setItem('user', cle[i]);
            this.HIDE =false;
            sessionStorage.setItem('HIDE', "false");
            this.enkantService.getUser(cle[i])
            .subscribe(data => {
              this.user = data;
             });
             console.log(data);
             location.reload();
          } 
          else
          {
            
          }
        }
        let myItem = sessionStorage.getItem('user')
        console.log(myItem);
        

      }
      
     });
     



    //console.log(username, password)
    // Vérifier que login/mdp sont correctes, par exemple par une requête à un service REST
    //localStorage.setItem('user', JSON.stringify({login : this.model.username}));
    //this.router.navigate(['/home']);
  }

}
