import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MouseIndicatorComponent } from './mouse-indicator/mouse-indicator.component';


@NgModule({
  declarations: [
    AppComponent,
    MouseIndicatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
