import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";
import {PokemonStore} from "./pokemon.store";
import {first, map, Observable} from "rxjs";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent implements OnInit {
  pokemons$: Observable<Pokemon[]>;
  pokemon$: Observable<Pokemon | undefined>;

  constructor(private store: PokemonStore) {
    this.pokemons$ = store.pokemons$;
    this.pokemon$ = store.pokemon$;
  }


  ngOnInit(): void {
  }

  change(pokemon: Pokemon) {
  }

  changePokemonInList(pokemon: Pokemon) {
    this.store.updateCurrPokemonEffect(pokemon);
  }
}
