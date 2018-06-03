import { Component, OnInit } from '@angular/core';
import { Directions } from "nativescript-directions";
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
	selector: 'localizacion',
  moduleId: module.id,
	templateUrl: './localizacion.component.html',
	styleUrls: ['./localizacion.component.css']
})

export class LocalizacionComponent implements OnInit {
	directions: Directions;
	constructor(private routerExtensions: RouterExtensions) { 
		this.directions = new Directions();
	}

	ngOnInit() {
	};

	goBack(){
        this.routerExtensions.backToPreviousPage();
	}
	
	public centroJuvenil() {
		this.directions.navigate({
		  to: {
			address: "Calle Condes de la Concepcion 40, El Palmar, España"
		  }
		}).then(() => {
		  console.log('Vamos al Centro Juvenil');
		}).catch((err) => {
		  alert(err);
		});
	}
}