import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { prompt } from "ui/dialogs";
import { Kinvey } from "kinvey-nativescript-sdk";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "login", loadChildren: "./login/login.module#LoginModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private router: Router) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    onSigninButtonTap(): void {
        const email = this.email;
        const password = this.password;
        this.router.navigate(["/home"]);
        
    }

    onSignUpButtonTap(): void {
        this.router.navigate(["/signUp"]);
    }

    onForgotPasswordTap() : void{
        prompt({
            title: "Contraseña Olvidada",
            message: "Introduce el correo electrónico que usaste para registrarte",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
          }).then((data) => {
            if (data.result) {
              Kinvey.User.resetPassword(data.text.trim())
                .then(() => {
                  alert("Se han enviado instrucciones para resetear su contraseña al correo electrónico");
                }, () => {
                  alert("Ha ocurrido un error inesperado");
                });
            }
          });
      }
}
