import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { ListDataService } from './list-data.service';
import { MainComponent } from './main/main.component';

import { OrderByColumnPipe } from './main/orderColumnBy';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    OrderByColumnPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
