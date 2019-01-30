import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EnkantService } from '../enkant.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router:Router, private enkantService: EnkantService) { }

  ngOnInit() {
  }

  onSubmit(form){
    this.enkantService.addUser(form.form.value)
      .subscribe(user => {
        this.router.navigateByUrl('');
      });
}

}
