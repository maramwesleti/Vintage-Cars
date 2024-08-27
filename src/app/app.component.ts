import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vintage cars';
  constructor(private router: Router) {}

  isFirstPage(): boolean {
    return this.router.url === '/';
  }
 
}




  

