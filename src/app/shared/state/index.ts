import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import * as fromGraph from './graph.reducer';

export interface State {
  graph: fromGraph.GraphState;
}

export const reducers: ActionReducerMap<State> = {
  graph: fromGraph.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];

export const selectGraphState = ( state: State ) => state.graph;

export const selectRootGraph = createSelector(
  selectGraphState,
  fromGraph.selectAll
);

export const selectActiveChild = createSelector(
  selectGraphState,
  fromGraph.selectActiveChild
);
