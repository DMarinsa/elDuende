import { Kinvey } from 'kinvey-nativescript-sdk';
import { Juego } from '~/dataModels/juego';
import { Usuario } from '~/dataModels/usuario';
export class Partida implements Kinvey.Entity {
    public _id: string;
    public fecha: string;
    public juego: Juego['titulo'];
    public maxJugadores: number;
    public jugadores?: [Usuario['username']];
    public duracion?: number

    constructor( options: any){
        this._id = options._id;
        this.fecha= options.fecha;
        this.maxJugadores= options.maxJugadores;
        this.jugadores= options.jugadores;
        this.duracion= options.duracion;
    }
}