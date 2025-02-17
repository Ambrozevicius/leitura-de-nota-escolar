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
  res_estado='';

  verificacao_inicial() {
    if (this.n1 > 10 || this.n2 > 10 || this.n3 > 10 || this.n4 > 10 || this.n1 < 0 || this.n2 < 0 || this.n3 < 0 || this.n4 < 0 ) {
      alert("a nota máxima é 10 e a miníma é 0");
    } 
    else {
      this.calcular();
    }
  }
  
  calcular() {

    this.res = (this.n1 + this.n2 + this.n3 + this.n4) / 4;
    
    if (this.res < 3) {
      this.res_estado = "Retido";
    } else if (this.res > 6) {
      this.res_estado = "Aprovado";
    } else { 
      this.res_estado = "de Recuperação";
    }
  }
}