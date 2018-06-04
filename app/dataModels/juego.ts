import { Kinvey } from 'kinvey-nativescript-sdk';
export class Juego implements Kinvey.Entity {
        public _id: string;
        public titulo?: string;
        public image?: string;
        public minJugadores?: number;
        public maxJugadores?: number;
        public disponible?: boolean;
        public fechaAlta?: string;
        public fechaBaja?: string;
        constructor(options: any) {
            this._id = options._id;
            this.titulo= options.titulo;
            this.image= encodeURI(options.image);
            this.minJugadores= options.minJugadores;
            this.maxJugadores= options.maxJugadores;
            this.disponible= options.disponible;
            this.fechaAlta= options.fechaAlta;
            this.fechaBaja= options.fechaBaja;
        }
}