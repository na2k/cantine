import { Component, OnInit } from '@angular/core';
import { EnkantService } from '../enkant.service';
import { User } from '../user';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  user:User ;

  constructor(private enkantService: EnkantService) { }

  ngOnInit() {

    if (sessionStorage.getItem('user'))
    {
  
        this.enkantService.getUser(sessionStorage.getItem('user'))
        .subscribe((data : any) => {
         this.user = data;
         console.log(this.user);
        });

    }


  }

  onSubmit(form){
    console.log("Avant");
    console.log(form.form.value);
    console.log(this.user);
    console.log(this.user.pswd);
    console.log(form.form.value.verifmdp);
    if (form.form.value.verifmdp === this.user.pswd)
    {
      if( form.form.value.email != "")
      {
        this.user.email=form.form.value.email;
      }
      if( form.form.value.phone != "")
      {
        this.user.phone=form.form.value.phone;
      }
      if( form.form.value.mdp != "" && form.form.value.mdp == form.form.value.mdp2)
      {
        this.user.pswd=form.form.value.mdp;
      }

      if( form.form.value.mdp == this.user.pswd || form.form.value.email == this.user.email || form.form.value.phone == this.user.phone)
      this.enkantService.editUser(this.user, sessionStorage.getItem('user'))
        .subscribe(user => {
          location.reload();
      });


      console.log("Aprés");
    console.log(form.form.value);
    console.log(this.user);
    }

    

     

}

}