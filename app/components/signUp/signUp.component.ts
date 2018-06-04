import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Usuario } from "~/dataModels/usuario";
import { Kinvey } from "kinvey-nativescript-sdk";
import { RouterExtensions } from "nativescript-angular/router";
import { Router } from "@angular/router";
import { TextField } from "ui/text-field";

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
    usuariosCollection: any;
    usuarioRegistrar: Usuario;
    activeUser: any;

    constructor(
        private router: Router,
        private routerExtensions: RouterExtensions) {
            this.usuarioRegistrar = new Usuario();
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

    goBack(){
        this.routerExtensions.backToPreviousPage();
    }

    async onSignupButtonTap(): Promise<void> {
        const usuarioActivo = Kinvey.User.getActiveUser();
        this.usuarioRegistrar.fechaAlta=new Date().toLocaleDateString();
        Kinvey.User.logout();
        const ActiveUser = Kinvey.User.getActiveUser();
        if(!ActiveUser){
            const usuario = Kinvey.User.signup(this.usuarioRegistrar)
                .then(() => {
                    alert('Registro realizado correctamente, volverás directamente a la pantalla de inicio');
                    this.routerExtensions.backToPreviousPage();
                }).catch(function(error) {
                    alert(error.message);
            });
        }
    }
}
