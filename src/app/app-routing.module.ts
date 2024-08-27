import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/update/update.component';
import { HomeComponent } from './components/home/home.component';
import { AjouteProduitComponent } from './components/ajoute-produit/ajoute-produit.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path:'update/:id',component: UpdateComponent
  },
  {
    path:'ajoute',component: AjouteProduitComponent
  },
  {  
    path:'home',component: HomeComponent
  },
  {  
    path:'products',component: ProductsComponent
  }

  // {path:'',redirectTo:'visiteur',pathMatch:'full'},
  // {path:'**',component: ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
