import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  n1=0;
  n2=0;
  n3=0;
  n4=0;
  res=0;

  calcular() {
    this.res = (this.n1 + this.n2 + this.n3 + this.n4) / 4
  }

}
