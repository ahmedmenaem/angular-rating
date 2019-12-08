import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-angular-rating',
  template: `
    <span class="rating-wrapper">
      <span *ngFor="let option of options">
        <span
          (click)="changeRating(option)"
          [ngClass]="{rated: option <= rating}"
        >&#9733;</span>
      </span>
    </span>
  `,
  styles: [`
    .rated {
      color: orange;
    }
    .rating-wrapper {
      cursor: pointer;
    }
  `]
})
export class AngularRatingComponent implements OnInit {
  @Output() ratingChanged = new EventEmitter();
  @Input() rating = 0;
  @Input() count = 0;

  options = [];

  constructor() { }

  ngOnInit() {
    this.options = Array.from({ length: this.count}, (v, k) => ++k);
  }

  changeRating(rating: number) {
    this.ratingChanged.emit(rating);
  }

}
