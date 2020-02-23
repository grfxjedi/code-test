import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from 'src/app/material.module';

import { GraphPageListComponent } from './components/graph-page-list/graph-page-list.component';
import { GraphPageCardComponent } from './components/graph-page-card/graph-page-card.component';
import { GraphTitleComponent } from './components/graph-title/graph-title.component';
import { GraphListComponent } from './components/graph-list-view/graph-list-view.component';
import { GraphCardComponent } from './components/graph-card-view/graph-card-view.component';
import { GraphEffects } from './graph.effects';

@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild( [
      { path: 'list', component: GraphPageListComponent },
      { path: 'card', component: GraphPageCardComponent }
    ] ),
    EffectsModule.forFeature( [ GraphEffects ] )
  ],
  declarations: [
    GraphPageListComponent,
    GraphPageCardComponent,
    GraphTitleComponent,
    GraphListComponent,
    GraphCardComponent
  ]
} )
export class GraphModule { }
