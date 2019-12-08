import { Component } from '@angular/core';
import { AngularConsoleLoggerService } from 'angular-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  book = {
    rating: 5,
    name: 'my nice book'
  };

  constructor(private loggingService: AngularConsoleLoggerService){}

  changeRating(rating: number) {
    this.loggingService.info(`choose rating = ${rating}`);
    this.book.rating = rating;
  }
}
