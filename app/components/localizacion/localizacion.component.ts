import { Component, OnInit } from '@angular/core';
import { Directions } from "nativescript-directions";

@Component({
	selector: 'localizacion',
	templateUrl: 'localizacion.component.html',
})

export class LocalizacionComponent implements OnInit {
	directions: any;
	constructor() { }

	ngOnInit() {
		this.directions = new Directions();
	};

	public centroJuvenil() {
		this.directions.navigate({
		  to: {
			address: "Calle Condes de la Concepcion 40, El Palmar, España"
		  }
		}).then(() => {
		  console.log('Vamos al Centro Juvenil');
		}, (err) => {
		  alert(err);
		});
	  }
}