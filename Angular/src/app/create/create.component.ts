import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnkantService } from '../enkant.service';
import { User } from '../user';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user:User  = new User('','','','','',0,'') ;

  constructor(private router:Router, private enkantService: EnkantService) { }
  
  ngOnInit() {
  }

  onSubmit(form){

    if(form.form.value.mdp === form.form.value.verifMdp){
      this.user.lastname=form.form.value.lastname;
      this.user.firstname=form.form.value.firstname;
      this.user.email=form.form.value.email;
      this.user.phone=form.form.value.phone;
      this.user.pswd=form.form.value.mdp;
      this.user.money=0;


    this.enkantService.addUser(this.user)
      .subscribe(user => {
        this.router.navigateByUrl('');
      });

    }
    else
    {
      console.log("Les mot de passe ne sont pas identique");
    }

    }

}
