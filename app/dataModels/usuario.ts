import { Kinvey } from 'kinvey-nativescript-sdk';
export class Usuario implements Kinvey.Entity {
    constructor(
        public _id: string,
        public nombre: string,
        public nick: number,
        public rol: string,
        public fechaAlta: string,
        public fechaBaja: string){}
}