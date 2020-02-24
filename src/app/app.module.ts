
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { GraphModule } from './graph/graph.module';
import { BottomSheetComponent, BottomSheetContent } from './bottom-sheet/bottom-sheet.component'
import { reducers, metaReducers } from './shared/state';

@NgModule( {
  declarations: [ AppComponent, BottomSheetComponent, BottomSheetContent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot( [
      { path: '', pathMatch: 'full', redirectTo: '/list' }
    ] ),
    StoreModule.forRoot( reducers, { metaReducers } ),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot( [] ),
    EffectsModule.forFeature( [ BottomSheetComponent ] ),
    MaterialModule,
    GraphModule
  ],
  entryComponents: [
    BottomSheetContent
  ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
