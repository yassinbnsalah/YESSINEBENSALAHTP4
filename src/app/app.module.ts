import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Application1Component } from './application1/application1.component';
import { Application2Component } from './application2/application2.component';
import { Application3Component } from './application3/application3.component';

@NgModule({
  declarations: [
    AppComponent,
    Application1Component,
    Application2Component,
    Application3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
