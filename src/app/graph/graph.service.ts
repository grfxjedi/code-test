import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Graph } from './graph.model';

const BASE_URL = 'http://localhost:3000/graph';

@Injectable( {
  providedIn: 'root'
} )

export class GraphService {
  constructor( private http: HttpClient ) { }

  all () {
    return this.http.get<Graph[]>( BASE_URL );
  }
}
