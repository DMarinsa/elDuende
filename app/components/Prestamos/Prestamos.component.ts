import { Component, OnInit } from "@angular/core";
import { Kinvey } from "kinvey-nativescript-sdk";
import { forEach } from "@angular/router/src/utils/collection";
import { Juego } from "~/dataModels/juego";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "Prestamos",
    moduleId: module.id,
    templateUrl: "./Prestamos.component.html"
})
export class PrestamosComponent implements OnInit {
    Ludoteca: any;
    listaJuegos: Array<Juego>;
    private _Juego: ObservableArray<Juego> = new ObservableArray<Juego>([]);
    constructor() {
    }

    ngOnInit(): void {
        Kinvey.User.getActiveUser();
        this.Ludoteca = Kinvey.DataStore.collection('juegos', Kinvey.DataStoreType.Sync);
        this.Ludoteca.pull()
            .then((juegos) => {
                alert(juegos);
            }).catch((err)=>alert(err.message));
        /*
        this.Ludoteca.sync()
            .then((juegos) => {
                this.listaJuegos = juegos.pull;
                alert(juegos.pull.length);
            }) .then( (juego) => {
                alert(juego);
                this.listaJuegos = [];
                juego.forEach((datosJuego: any) => {
                    datosJuego.id = datosJuego._id;
                    datosJuego.nombre = datosJuego.titulo;
                    datosJuego.imagen = datosJuego.image;
                    datosJuego.disponibilidad = datosJuego.disponible;
                    const jueogPush = new Juego(datosJuego);
                    this.listaJuegos.push(jueogPush);
                })
            }) .then((juegos: Array<Juego>) => {
                this._Juego = new ObservableArray(juegos);
            }) .catch((err)=> alert(err.message));
        /* this.Ludoteca.pull()
            .then( (juegos) => {
                alert('pull')
                alert(juegos)
            }) .catch( (err) => alert(err.message));
        const listaJuegos = this.Ludoteca.find()
            .subscribe((juego) => {
                alert('find')
                alert(juego) 
            }, (err) => {
              alert(err.message)
            }, () => {
                
            }); */
    }

}
