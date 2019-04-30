import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../../components/navbar/navbar.module';

const routes = [{
	path: '',
	component: LayoutComponent,
	children: []
}];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  exports: [LayoutComponent]
})
export class LayoutModule {}
