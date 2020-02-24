import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Graph } from '../../graph.model';

@Component( {
  selector: 'app-graph-title',
  templateUrl: './graph-title.component.html',
  styleUrls: [ './graph-title.component.scss' ]
} )
export class GraphTitleComponent {
  @Input() graph: Graph[];
  @Input() activeChild: Graph;
  @Output() select = new EventEmitter();
}
