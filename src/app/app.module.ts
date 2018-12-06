import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { InfoComponent } from './info/info.component';
import { FormsModule } from '@angular/forms';
import { GestionComponent } from './gestion/gestion.component';
import { TemplateCommandeComponent } from './template-commande/template-commande.component';

 const routes:Routes = [

   {path : '', component :IndexComponent},
   {path : 'index', component :IndexComponent},
  //  {path : 'info', component : InfoComponent},
  //  {path : 'create', component :CreateComponent},
  //  {path : 'gestion', component :GestionComponent},
 ];


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CreateComponent,
    InfoComponent,
    GestionComponent,
    TemplateCommandeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
