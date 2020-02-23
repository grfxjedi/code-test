import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createSelector, createReducer, on, Action } from '@ngrx/store';
import { Graph } from "../../graph/graph.model";
import * as GraphActions from '../../graph/graph.actions';


const adapter = createEntityAdapter<Graph>( {
  selectId: ( graph: Graph ) => graph.id,
} );

export interface GraphState extends EntityState<Graph> {
  activeChildId: string | null;
}

export const initialState: GraphState = adapter.getInitialState( {
  activeChildId: null
} );

export function reducer ( state: GraphState | undefined, action: Action ) {
  return graphReducer( state, action );
}

const graphReducer = createReducer(
  initialState,
  on( GraphActions.graphLoaded, ( state, action ) => {
    console.log( action );
    return adapter.addAll( action.graph, state );
  } ),
  on( GraphActions.selectChild, ( state, action ) => {
    console.log( action );
    return adapter.addOne(
      action.child,
      {
        ...state,
        activeChildId: action.child.id
      }
    )
  } ),
  on( GraphActions.clearSelection, ( state, action ) => {
    console.log( action );
    return {
      ...state,
      activeChildId: null
    }
  } ),
);

export const { selectEntities, selectAll } = adapter.getSelectors();
export const selectActiveChildId = ( state: GraphState ) => state.activeChildId;
export const selectActiveChild = createSelector(
  selectEntities,
  selectActiveChildId,
  ( entities, activeChildId ) => {
    return entities[ activeChildId ]
  }
);
