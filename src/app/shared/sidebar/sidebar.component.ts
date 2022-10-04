import { Component } from '@angular/core';
import { GiftService } from '../../gift/services/gift.service';
import { AppComponent } from '../../app.component';
import { SearchGifsResponse } from '../../gift/interface/gifs.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
     
  get historial(){
      return this.GiftService.historial;
  }

  constructor( private GiftService: GiftService){

  }

  buscarsidebar( termino: string|any){
    this.GiftService.buscarGift(termino);
  }

}
