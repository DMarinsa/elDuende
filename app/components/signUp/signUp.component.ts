import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Usuario } from "~/dataModels/usuario";
import { Kinvey } from "kinvey-nativescript-sdk";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "signUp", loadChildren: "./signUp/signUp.module#SignUpModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "SignUp",
    moduleId: module.id,
    templateUrl: "./signUp.component.html"
})
export class SignUpComponent implements OnInit {
    name: string;
    email: string;
    password: string;
    repeat: string;
    usuariosCollection: any;
    activeUser: any;
    usuario: Usuario;

    constructor() {
        this.usuario = new Usuario();
    }

    ngOnInit(): void {
        this.usuariosCollection = Kinvey.DataStore.collection('usuarios');
    }

    onSignupWithSocialProviderButtonTap(): void {
        /* ***********************************************************
        * For sign up with social provider you can add your custom logic or
        * use NativeScript plugin for sign up with Facebook
        * http://market.nativescript.org/plugins/nativescript-facebook
        *************************************************************/
    }

    async onSignupButtonTap(): Promise<void> {
        const name = this.name;
        const email = this.email;
        const password = this.password;
        const fecha = new Date().toLocaleDateString();
        const usuarioActivo = Kinvey.User.getActiveUser();
        const usuarioRegistrar = {
            _id: email,
            nombre: name,
            password: password,
            fechaAlta: fecha
        }
            const usuario = Kinvey.User.signup()
            .then(function(user){
                const guardar = this.usuariosCollection.save(usuarioRegistrar)
                    .catch(function(error: Kinvey.BaseError){
                        console.log(error);
                    });
                Kinvey.User.signup(usuarioRegistrar)
                    .catch(function(error) {
                        console.log(error)});
            }).catch(function(error) {
                console.log(error);
            })
            this.usuariosCollection.save()
                .catch( function onError(e){
                    console.log('error al registrar')
                    console.log(e.error)
                });
    }
}
