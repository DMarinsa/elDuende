import { Component, OnInit } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { forEach } from "@angular/router/src/utils/collection";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "Prestamos", loadChildren: "./Prestamos/Prestamos.module#PrestamosModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Prestamos",
    moduleId: module.id,
    templateUrl: "./Prestamos.component.html"
})
export class PrestamosComponent implements OnInit {
    Ludoteca: any;
    listaJuegos: [object];
    constructor() {
        this.Ludoteca= Kinvey.DataStore.collection('juegos', Kinvey.DataStoreType.Cache);
    }

    ngOnInit(): void {
        this.Ludoteca.pull().then(function onSuccess(juegos){
            juegos.forEach(function(juego){
                this.listaJuegos.push(juego);
                alert('Juegos Cargados')
            });
        }).catch((err) => alert(err.error));
    }
}
