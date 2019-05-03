import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
	selector: 'calendario',
	templateUrl:'calendario.component.html',
	styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
	public dia:string;
	public mes:string;
	form: FormGroup;

	constructor(public formBuilder: FormBuilder){

		 this.form = this.formBuilder.group({
  		dayOne: ['', [Validators.required, Validators.maxLength(12)]],
  		dayTwo: ['', Validators.required]
  		});


		this.dia='Wed 16 May';
		this.mes='fri 2 june';
	}

	// name = new FormControl('');
	 onFormSubmit(){
  	console.log(this.form.value);
 	 }

	ngOnInit(){
	}

}