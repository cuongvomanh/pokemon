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
    super({pokemons: [{"name": "1", "url": "url1", "id": "id1"},
        {"name": "2", "url": "url2", "id": "id2"}],
      currPokemonId: undefined});
  }

  readonly pokemons$ : Observable<Pokemon[]> = this.select(x => x.pokemons);
  readonly pokemon$: Observable<Pokemon | undefined> = this.select(x => x.pokemons.find(y => y.id === x.currPokemonId));
  readonly updateCurrPokemonEffect = this.updater<Pokemon>((x, pokemon) => ({...x, currPokemonId: pokemon.id}))
}
