import { NgModule } from '@angular/core';
import { AngularRatingComponent } from './angular-rating.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AngularRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [AngularRatingComponent]
})
export class AngularRatingModule { }
