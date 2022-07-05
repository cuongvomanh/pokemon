import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  @Output() pokemonChanged = new EventEmitter<Pokemon>();

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.pokemon.name = "Pokemon Changed";
    this.pokemonChanged.emit(this.pokemon);
  }
}
