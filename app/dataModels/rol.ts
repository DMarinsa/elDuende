import { Kinvey } from 'kinvey-nativescript-sdk';
export class Rol implements Kinvey.Entity {
    constructor(
        public _id: string,
        public rol: string){}
}