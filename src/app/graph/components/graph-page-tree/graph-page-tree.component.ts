import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Graph } from '../../graph.model';
import * as fromRoot from 'src/app/shared/state';
import * as GraphActions from '../../graph.actions';

@Component( {
  selector: 'app-graph-page-tree',
  templateUrl: './graph-page-tree.component.html',
  styleUrls: [ './graph-page-tree.component.scss' ]
} )
export class GraphPageTreeComponent implements OnInit {
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

  ngOnDestroy (): void {
    this.resetGraph();
  }

  getGraph () {
    this.store.dispatch( GraphActions.enter() );
  }

  resetGraph () {
    this.store.dispatch( GraphActions.clearSelection() );
  }
}
