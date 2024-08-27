import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from 'src/app/services/produits.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
displayProduct(arg0: any) {
throw new Error('Method not implemented.');
}
 
  produits: any[] = [];
  imageMapping: { [key: number]: string } = {
    8:'assets/images/image1.jpg',
    9:'assets/images/image2.png',
    10:'assets/images/image3.jpg',
    11:'assets/images/image4.png',
    16:'assets/images/image5.png',
    17:'assets/images/image6.png',
    19:'assets/images/image7.png',
    
  };

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
