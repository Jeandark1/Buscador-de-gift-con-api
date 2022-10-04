import { Component, ElementRef, ViewChild } from '@angular/core';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private GiftService: GiftService){}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

  if (valor.trim().length === 0) {
     return;
  }

    this.GiftService.buscarGift(valor);

    this.txtBuscar.nativeElement.value = '';
  }

}
