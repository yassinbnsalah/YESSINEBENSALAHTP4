import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Application1Component } from './application1/application1.component';
import { TransformingPipe } from './transforming.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Application1Component,
    TransformingPipe
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
