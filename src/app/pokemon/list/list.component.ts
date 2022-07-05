import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {
  query = new FormControl('');
  @Input() totalRecords: number = 0;
  @Input() pokemons: Pokemon[] = [];
  @Input() isLoading: boolean = false;
  @Output() pokemonChanged = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChanged($event: any) {

  }

  changePokemon(pokemon: Pokemon) {
    this.pokemonChanged.emit(pokemon);
  }
}
