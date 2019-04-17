import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersComponent } from './workers.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: WorkersComponent }];

@NgModule({
  declarations: [WorkersComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  exports: [WorkersComponent]
})
export class WorkersModule {}
