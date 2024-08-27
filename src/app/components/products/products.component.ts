import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  produits: any;
img: any;

  constructor(private produitService : ProduitsService) { }

  ngOnInit(): void {
    this.getproduit();
  }
  getproduit(): void {
    this.produitService.getListproduits().subscribe(data => {
      console.log(data);
      this.produits = data;
      },
      err => console.log(err)
      );
      }
      delete(idProduit: number): void {
        this.produitService.deleteproduits(idProduit).subscribe(() => {
          this.getproduit();
        });
      }
      

}
