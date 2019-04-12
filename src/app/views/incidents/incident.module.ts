import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentComponent } from './incident.component';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: IncidentComponent }];

@NgModule({
  declarations: [IncidentComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [IncidentComponent]
})
export class IncidentModule {}
