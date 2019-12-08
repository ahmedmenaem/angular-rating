import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularRatingModule } from 'angular-rating';
import { AngularConsoleLoggerModule } from 'angular-console-logger';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularRatingModule,
    AngularConsoleLoggerModule.forRoot({
      isProduction: false,
      appPrefix: 'message'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
