import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'calendario',
	templateUrl:'calendario.component.html',
	styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
	public dia:string;
	public mes:string;

	constructor(){
		this.dia='Wed 16 May';
		this.mes='fri 2 june';
	}

	ngOnInit(){
		console.log('Calendario');
	}

}