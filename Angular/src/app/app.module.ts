import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GestionComponent } from './gestion/gestion.component';
import { InfosComponent } from './infos/infos.component';
import { CagnottesComponent } from './cagnottes/cagnottes.component';
import { CommandesComponent } from './commandes/commandes.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GestionComponent,
    InfosComponent,
    CagnottesComponent,
    CommandesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
