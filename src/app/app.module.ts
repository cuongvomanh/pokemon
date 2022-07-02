import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { ListComponent } from './pokemon/list/list.component';
import { DetailComponent } from './pokemon/detail/detail.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PaginatorComponent } from './shared/paginator/paginator.component';
import {TableModule} from "./shared/table/table.module";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    ListComponent,
    DetailComponent,
    PaginatorComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        TableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
