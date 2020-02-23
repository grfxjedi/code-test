import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";

describe( 'AppComponent', () => {
  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialModule
      ],
      declarations: [
        AppComponent
      ],
    } ).compileComponents();
  } ) );

  it( 'should create the app', () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app ).toBeTruthy();
  } );

  it( `should have as title 'Code Test - Angular 8 w/ NgRx'`, () => {
    const fixture = TestBed.createComponent( AppComponent );
    const app = fixture.debugElement.componentInstance;
    expect( app.title ).toEqual( 'Code Test - Angular 8 w/ NgRx' );
  } );

  it( 'should render title in a material toolbar', () => {
    const fixture = TestBed.createComponent( AppComponent );
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect( compiled.querySelector( 'mat-toolbar' ).textContent ).toContain( 'Code Test - Angular 8 w/ NgRx' );
  } );
} );
