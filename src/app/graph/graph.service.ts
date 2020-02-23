import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as uuid from "uuid/v4";
import { Graph, GraphRequiredProps } from './graph.model';

const BASE_URL = "http://localhost:3000/graph";
const HEADER = {
  headers: new HttpHeaders( { "Content-Type": "application/json" } )
};

@Injectable( {
  providedIn: "root"
} )

export class GraphService {
  constructor( private http: HttpClient ) { }

  all () {
    return this.http.get<Graph[]>( BASE_URL );
  }
}
