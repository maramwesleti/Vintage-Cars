import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-ajoute-produit',
  templateUrl: './ajoute-produit.component.html',
  styleUrls: ['./ajoute-produit.component.css']
})
export class AjouteProduitComponent implements OnInit {
formProduit!: FormGroup;
  
  constructor(private fb:FormBuilder,private produitService : ProduitsService,private router: Router) { }
  
  ngOnInit(): void {
    this.formProduit = this.fb.group({
      nomProduit: ['', Validators.required],
      prixProduit: ['', Validators.required],
      categorieIdCat: ['', Validators.required],
      dateCreation: ['', Validators.required]
    });
  }
  submit() {
    this.produitService.postproduit(this.formProduit.value).subscribe(
      data => {
        console.log('Post request successful', data);
        this.router.navigate(['home']);
      },
      error => {
        console.error('Error during post request', error);
      }
    );
  }

}
