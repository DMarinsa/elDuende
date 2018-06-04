import { Kinvey } from 'kinvey-nativescript-sdk';
export class Usuario implements Kinvey.Entity {
        public _id: string;
        public email: string;
        public username: string;
        public password: string;
        public fechaAlta: string;
        public fechaBaja?: string;
}