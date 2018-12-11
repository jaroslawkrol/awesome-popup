import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AwesomePopupComponent } from './awesome-popup/awesome-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomePopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
