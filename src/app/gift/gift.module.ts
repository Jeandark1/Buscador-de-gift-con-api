import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftpageComponent } from './giftpage/giftpage.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { GiftService } from './services/gift.service';



@NgModule({
  declarations: [
    GiftpageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GiftpageComponent
  ],
  providers: [
    GiftService
  ]
})
export class GiftModule { }
