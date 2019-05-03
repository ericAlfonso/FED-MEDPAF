import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {CalendarioComponent} from './calendario.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



const routes = [{
	path: '',
	component: CalendarioComponent
}];

@NgModule({
  declarations: [CalendarioComponent],
  imports: [BsDatepickerModule.forRoot(), RouterModule.forChild(routes), NavbarModule, ReactiveFormsModule,
  	FormsModule],
  exports: [CalendarioComponent]
})
export class CalendarioModule{}


