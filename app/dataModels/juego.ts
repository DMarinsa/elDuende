import { Kinvey } from 'kinvey-nativescript-sdk';
export class Juego implements Kinvey.Entity {
    constructor(
        public _id: string,
        public titulo: string,
        public jugadores: number,
        public disponible: boolean,
        public fechaAlta: string,
        public fechaBaja: string){}
}