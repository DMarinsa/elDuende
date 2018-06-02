import { Kinvey } from 'kinvey-nativescript-sdk';
import { Juego } from '~/dataModels/juego';
import { Usuario } from '~/dataModels/usuario';
export class Partida implements Kinvey.Entity {
    constructor(
    public _id: string,
    public fecha: Date,
    public juego: Juego,
    public jugadores: [Usuario],
    public maxJugadores: number,
    public duracion?: number){}
}