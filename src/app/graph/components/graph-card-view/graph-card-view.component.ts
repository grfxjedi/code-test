import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Graph } from "../../graph.model";

@Component( {
  selector: "app-graph-card-view",
  templateUrl: "./graph-card-view.component.html",
  styleUrls: [ "./graph-card-view.component.scss" ]
} )
export class GraphCardComponent {
  @Input() graph: Graph[];
  @Input() activeChild: Graph;
  @Output() select = new EventEmitter();
}
