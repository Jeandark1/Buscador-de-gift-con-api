import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GiftService {


  private apiKey: string ='r6Uowrh21hQQ4CTIUKHn0ZzrlYxGmWvT';
  private serviciourl: string ='https://api.giphy.com/v1/gifs';
  private _historial: String[] =[];

  // cambiar any por su tipo 
  public resultados: Gif[]=[];

  get historial(){
     return [...this._historial];
  }

constructor( private http: HttpClient){

  this._historial = JSON.parse( localStorage.getItem('historial')!) || [];
  this.resultados = JSON.parse( localStorage.getItem('resultados')!) || [];

    //  this._historial= localStorage.getItem('historial');
    // if (localStorage.getItem('historial')) {
    //    this._historial = JSON.parse( localStorage.getItem('historial')!) 
    // }
  }
  
  buscarGift( query: string= ''){

    query = query.trim().toLocaleLowerCase();

      if(!this._historial.includes( query)){
        this._historial.unshift(query);
    this._historial = this._historial.splice(0,10);
    localStorage.setItem('historial', JSON.stringify(this._historial));
    localStorage.setItem('resultados', JSON.stringify(this.resultados));
      }

      const params = new HttpParams()
            .set('api_key',this.apiKey)
            .set('limit','10')
            .set('q', query);

            // console.log(params.toString());
            // `https://api.giphy.com/v1/gifs/search?api_key=${ this.apiKey}&q=${query}&limit=10`

      this.http.get<SearchGifsResponse>(`${ this.serviciourl}/search`,{params})
          .subscribe( (resp ) => { 
            // console.log(resp.data);
            this.resultados = resp.data;
            
          });

        // fetch('https://api.giphy.com/v1/gifs/search?api_key=r6Uowrh21hQQ4CTIUKHn0ZzrlYxGmWvT&q=dragon ball z&limit=10').then( resp => {resp.json().then( data=> {
        //   console.log(data);
        // } )})

      // console.log(this._historial);
  }
}
