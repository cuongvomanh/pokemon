import {ComponentStore} from "@ngrx/component-store";
import {Pokemon} from "../models/pokemon";
import {Injectable} from "@angular/core";
import {combineLatest, mergeMap, Observable, tap} from "rxjs";

interface PokemonsState {
  pokemons: Pokemon[];
  currPokemonId: string | undefined;
}

@Injectable({providedIn: "root"})
export class PokemonStore extends ComponentStore<PokemonsState> {

  constructor() {
    super({
      pokemons: [
        {"name": "1", "url": "url1", "id": "id1"},
        {"name": "2", "url": "url2", "id": "id2"},
        {"name": "3", "url": "url2", "id": "id3"},
        {"name": "4", "url": "url2", "id": "id4"},
        {"name": "5", "url": "url2", "id": "id5"},
        {"name": "6", "url": "url2", "id": "id6"},
        {"name": "7", "url": "url2", "id": "id7"},
        {"name": "8", "url": "url2", "id": "id8"},
        {"name": "9", "url": "url2", "id": "id9"},
        {"name": "10", "url": "url2", "id": "id10"},
        {"name": "11", "url": "url2", "id": "id11"},
        {"name": "12", "url": "url2", "id": "id12"}
      ],
      currPokemonId: undefined
    });
  }

  readonly pokemons$: Observable<Pokemon[]> = this.select(x => x.pokemons);
  readonly pokemon$: Observable<Pokemon | undefined> = this.select(x => x.pokemons.find(y => y.id === x.currPokemonId));
  readonly updateCurrPokemonEffect = this.updater<Pokemon>((x, pokemon) => ({...x, currPokemonId: pokemon.id}))
}
