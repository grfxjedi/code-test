import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, EMPTY } from 'rxjs';
import {
  mergeMap,
  map,
  catchError,
  concatMap,
  exhaustMap,
  switchMap,
  tap
} from 'rxjs/operators';

import * as GraphActions from './graph.actions';
import { GraphService } from './graph.service';

@Injectable()
export class GraphEffects {
  constructor( private actions$: Actions, private graphService: GraphService ) { }

  @Effect()
  loadGraphs$ = this.actions$.pipe(
    ofType( GraphActions.enter ),
    tap( console.log, console.error ),
    switchMap( () =>
      this.graphService.all().pipe(
        map( graph => GraphActions.graphLoaded( { graph } ) ),
        catchError( () => of( GraphActions.graphLoadedFail() ) )
      )
    )
  );
}
