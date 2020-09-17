import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cap01Component } from './cap01/cap01.component';
import { IteradoresUmComponent } from './iteradores-um/iteradores-um.component';

@NgModule({
  declarations: [
    AppComponent,
    Cap01Component,
    IteradoresUmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
