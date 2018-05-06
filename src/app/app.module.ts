import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule }     from './app.routing';

import { AppComponent } from './app.component';
import { HolidayListComponent } from './holiday-list/holiday-list.component';
import { HolidayDetailComponent } from './holiday-detail/holiday-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayListComponent,
    HolidayDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
