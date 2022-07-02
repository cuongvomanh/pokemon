import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Pokemon} from "../models/pokemon";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon;

  constructor() {
    this.pokemon = {"name": "1", "url": "url", "id": "id1"} as Pokemon;
  }


  ngOnInit(): void {
  }

  change(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  changePokemonInList(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }
}
