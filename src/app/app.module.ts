import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './views/layout/layout.module';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {CalendarioComponent} from './components/calendario/calendario.component';




@NgModule({
  declarations: [AppComponent, CalendarioComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, BsDatepickerModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

