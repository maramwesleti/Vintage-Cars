import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private route: ActivatedRoute, private produitService: ProduitsService, private router: Router) {}

  produit: any;
  id: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.produitService.getOneproduits(this.id).subscribe(data => {
      this.produit = data;
    });
  }

  updateproduit() {
    this.produitService.updateproduit(this.produit).subscribe(data => {
      this.produit =data;
    });
    this.router.navigate(['home']);
  }
}
