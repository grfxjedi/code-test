import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Graph } from "../../graph.model";

@Component( {
  selector: "app-graph-list-view",
  templateUrl: "./graph-list-view.component.html",
  styleUrls: [ "./graph-list-view.component.scss" ]
} )
export class GraphListComponent {
  @Input() graph: Graph[];
  @Input() activeChild: Graph;
  @Output() select = new EventEmitter();
}
