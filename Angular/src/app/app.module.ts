import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent,MenuComponentDialog  } from './menu/menu.component';
import { GestionComponent } from './gestion/gestion.component';
import {CreateComponent} from './create/create.component';
import { InfosComponent } from './infos/infos.component';
import { CagnottesComponent } from './cagnottes/cagnottes.component';
import { CommandesComponent } from './commandes/commandes.component';
import { PlatsComponent } from './plats/plats.component';
import { HttpClientModule } from '@angular/common/http'; 

import {DemoMaterialModule} from '../material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuComponentDialog,
    GestionComponent,
    InfosComponent,
    CagnottesComponent,
    CommandesComponent,
    CreateComponent,
    PlatsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  entryComponents:[MenuComponent , MenuComponentDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

