import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ListDataService } from './list-data.service';
import { MainComponent } from './main/main.component';

import { OrderByColumnPipe } from './main/orderColumnBy';
import { Main2Component } from './main-2/main-2.component';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderByColumnPipe,
    Main2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
