import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import {FormsModule} from '@angular/forms';
import { UpdateProduitComponent } from './update-produit/update-produit.component';



const routes: Routes = [
  {path: 'produits', component : ProduitsComponent},
  {path: 'add-produit', component : AddProduitComponent},
  {path: 'updateProduit/:id', component: UpdateProduitComponent},
  { path: '', redirectTo: 'produits', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent
  ],
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
