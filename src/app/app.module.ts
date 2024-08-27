import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateComponent } from './components/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { ProduitsService } from './services/produits.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AjouteProduitComponent } from './components/ajoute-produit/ajoute-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { PageComponent } from './components/page/page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UpdateComponent,
    NavbarComponent,
    AjouteProduitComponent,
    ProductsComponent,
    PageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProduitsService],
  bootstrap: [AppComponent]
})
export class AppModule { }





