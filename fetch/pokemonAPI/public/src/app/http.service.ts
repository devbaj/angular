import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor( private _http: HttpClient ) {
    this.getPokemon();
  }

  getPokemon( ) {
    console.log('entered Get Pokemon route')
    let pokemonInfo = this._http.get( 'https://pokeapi.co/api/v2/pokemon/oddish' );
    pokemonInfo.subscribe( data => {
      console.log( `${data.forms[0].name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.` );
      let ability1Info = this._http.get( data.abilities[0].ability.url );
      let ability2Info = this._http.get( data.abilities[1].ability.url );
      ability1Info.subscribe( abilityInfo => {
        console.log( `${abilityInfo.pokemon.length} pokemon share the ${abilityInfo.name} ability` );
        for ( let poke of abilityInfo.pokemon ) {
          let pokeInfo = this._http.get( poke.pokemon.url );
          pokeInfo.subscribe( data => {
            for ( let ability of data.abilities ) {
              if ( ability.ability.name != abilityInfo.name ) {
                console.log ( `${data.name} also knows ${ability.ability.name}` );
              }
            }
          });
        }
      } );
      ability2Info.subscribe( abilityInfo => {
        console.log( `${abilityInfo.pokemon.length} pokemon share the ${abilityInfo.name} ability`);
        for ( let poke of abilityInfo.pokemon ) {
          let pokeInfo = this._http.get( poke.pokemon.url );
          pokeInfo.subscribe( data => {
            for ( let ability of data.abilities ) {
              if ( ability.ability.name != abilityInfo.name ) {
                console.log ( `${data.name} also knows ${ability.ability.name}` );
              }
            }
          });
        }
      } );
    } );
  }
}
