import { Component, OnInit } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent {

  get resultados(){
    return this.GiftService.resultados;
  }

  constructor( private GiftService: GiftService) { }
  
}
