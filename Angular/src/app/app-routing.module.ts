import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {InfosComponent} from './infos/infos.component';
import {GestionComponent} from './gestion/gestion.component';
import {CagnottesComponent} from './cagnottes/cagnottes.component';
import {CommandesComponent} from './commandes/commandes.component';

const routes: Routes = [
  { path: '', component: MenuComponent},
  { path: 'infos', component: InfosComponent},
  { path: 'gestion', component: GestionComponent},
  { path: 'gestion/cagnottes', component: CagnottesComponent},
  { path: 'gestion/commandes', component: CommandesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
