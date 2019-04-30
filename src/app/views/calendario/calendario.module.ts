import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {CalendarioComponent} from './calendario.component';
import { NavbarModule } from '../../components/navbar/navbar.module';

const routes = [{
	path: '',
	component: CalendarioComponent,
	children: []
}];

@NgModule({
  declarations: [CalendarioComponent],
  imports: [BsDatepickerModule.forRoot(), RouterModule.forChild(routes), NavbarModule],
  exports: [CalendarioComponent]
})
export class CalendarioModule{}


