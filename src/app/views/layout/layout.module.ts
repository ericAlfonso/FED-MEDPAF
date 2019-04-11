import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { RouterModule } from '@angular/router';

const routes = [{ path: '', component: LayoutComponent, children: [] }];

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, NavbarModule, RouterModule.forChild(routes)],
  exports: [LayoutComponent]
})
export class LayoutModule {}
