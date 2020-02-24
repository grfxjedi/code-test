import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

import { Graph, FlatNode } from '../../graph.model';

@Component( {
  selector: 'app-graph-tree-view',
  templateUrl: './graph-tree-view.component.html',
  styleUrls: [ './graph-tree-view.component.scss' ]
} )
export class GraphTreeComponent implements OnInit {
  @Input() graph: Graph[];

  private transformer = ( node: Graph, level: number ) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      title: node.title,
      level: level,
      chapter_id: node.chapter_id,
      section_id: node.section_id,
      objective_id: node.objective_id,
      exercise_id: node.exercise_id
    };
  }

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this.transformer,
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  dataSource = new MatTreeFlatDataSource( this.treeControl, this.treeFlattener );

  constructor() { }

  ngOnInit () {
    this.dataSource.data = [];
  }

  ngOnChanges ( changes: any ) {
    if ( changes.graph && changes.graph.previousValue !== changes.graph.currentValue ) {
      console.log( this.graph );
      if ( this.graph.length > 0 ) {
        this.dataSource.data = this.graph[ 0 ].children;
      }
    }
  }

  hasChild = ( _: number, node: FlatNode ) => node.expandable;
}
