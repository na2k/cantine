import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {CreateComponent} from './create/create.component';
import {InfosComponent} from './infos/infos.component';
import {GestionComponent} from './gestion/gestion.component';
import {CagnottesComponent} from './cagnottes/cagnottes.component';
import {CommandesComponent} from './commandes/commandes.component';
import { PlatsComponent } from './plats/plats.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'infos', component: InfosComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'create', component: CreateComponent},
  { path: 'gestion/cagnottes', component: CagnottesComponent},
  { path: 'gestion/commandes', component: CommandesComponent},
  { path: 'plats/:days', component: PlatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
