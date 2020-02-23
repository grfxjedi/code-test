import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Graph } from "../../graph.model";
import * as fromRoot from 'src/app/shared/state';
import * as GraphActions from '../../graph.actions';

@Component( {
  selector: 'app-graph-page-list',
  templateUrl: './graph-page-list.component.html',
  styleUrls: [ './graph-page-list.component.scss' ]
} )
export class GraphPageListComponent implements OnInit {
  graph$: Observable<Graph[]>;
  activeChild$: Observable<any>;

  constructor(
    private store: Store<fromRoot.State>,
  ) {
    this.graph$ = this.store.select( fromRoot.selectRootGraph );
    this.activeChild$ = this.store.select( fromRoot.selectActiveChild );
  }

  ngOnInit () {
    this.getGraph();
  }

  getGraph () {
    this.store.dispatch( GraphActions.enter() );
  }

  onSelect ( child: Graph ) {
    if ( child.children ) {
      this.store.dispatch( GraphActions.selectChild( { child } ) );
    }
  }

  resetGraph () {
    this.store.dispatch( GraphActions.clearSelection() );
  }

}
