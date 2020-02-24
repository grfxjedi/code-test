import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Graph } from '../../graph.model';
import { graphLoaded } from '../../graph.actions';

@Component( {
  selector: 'app-graph-card-view',
  templateUrl: './graph-card-view.component.html',
  styleUrls: [ './graph-card-view.component.scss' ]
} )
export class GraphCardComponent {
  @Input() graph: Graph[];
  @Input() activeChild: Graph;
  @Output() select = new EventEmitter();

  loaded: boolean = false;

  ngAfterViewInit () {
    window.setTimeout( () => this.loaded = true, 1000 );
  }

  selectCard ( child ) {
    this.loaded = false;
    window.setTimeout( () => this.loaded = true, 100 );
    this.select.emit( child );
  }
}
