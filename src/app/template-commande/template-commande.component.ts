import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-commande',
  template: `  <li class="standard bgPlat list-group-item col-12 d-flex justify-content-between align-items-center panier">
                   <img src="/assets/images/burger.jpg" style="width: 200px;" alt="imagePlat"><div>Test plat</div>
                  <button class="deletePanier btn btn-danger">X</button>
                  </li>`
})
export class TemplateCommandeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
