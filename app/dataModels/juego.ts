import { Kinvey } from 'kinvey-nativescript-sdk';
export class Juego implements Kinvey.Entity {
    constructor(
        public _id: string,
        public titulo: string,
        public image: string,
        public minJugadores: number,
        public maxJugadores: number,
        public disponible: boolean,
        public fechaAlta: string,
        public fechaBaja?: string){}
}