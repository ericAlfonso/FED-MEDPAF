import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IncidentComponent } from './components/incidents/incident.component';

@NgModule({
<<<<<<< HEAD
  declarations: [AppComponent, IncidentComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
=======
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
>>>>>>> first-release/integration
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
