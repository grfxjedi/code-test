import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component( {
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: [ './bottom-sheet.component.scss' ]
} )
export class BottomSheetComponent {
  constructor( private bottomSheet: MatBottomSheet ) { }

  openBottomSheet (): void {
    this.bottomSheet.open( BottomSheetContent );
  }
}

@Component( {
  selector: 'bottom-sheet-content',
  templateUrl: 'bottom-sheet-content.html',
} )
export class BottomSheetContent {
  constructor( private bottomSheetRef: MatBottomSheetRef<BottomSheetContent> ) { }

  openLink ( event: MouseEvent ): void {
    this.bottomSheetRef.dismiss();
    // event.preventDefault();
  }
}
