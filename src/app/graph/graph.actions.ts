import { createAction, props } from "@ngrx/store";

import { Graph } from "./graph.model";

export const enter = createAction( "[Graph] Enter" );

export const graphLoaded = createAction(
  "[Graph] Load Graph",
  props<{ graph: Graph[] }>()
);
export const graphLoadedFail = createAction( "[Graph] Load Graph Action Failed" );

export const selectChild = createAction(
  "[Graph] Select Child",
  props<{ child: Graph }>()
);

export const clearSelection = createAction( "[Graph] Clear Selection" );
