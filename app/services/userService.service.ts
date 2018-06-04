import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { Usuario } from "~/dataModels/usuario";


@Injectable()
export class Service {
  constructor(private http: Http) { }

  register(user: Usuario) {
    return Kinvey.User.signup(user);
  }

  login(user: Usuario) {
    return Kinvey.User.login(user.email, user.password);
  }

  loginWithMIC() {
    return Kinvey.User.loginWithMIC('http://redirecturi');
  }

  logoff() {
    return Kinvey.User.logout();
  }
}