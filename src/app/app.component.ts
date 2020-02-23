import { Component } from "@angular/core";

@Component( {
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.scss" ]
} )
export class AppComponent {
  title = "Code Test - Angular 8 w/ NgRx";
  links = [
    { path: "/list", icon: "list_alt", label: "List View" },
    { path: "/card", icon: "grid_on", label: "Card View" }
  ];
}
