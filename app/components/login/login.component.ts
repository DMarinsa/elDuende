import { Component, OnInit } from "@angular/core";
import * as Facebook from 'nativescript-facebook';
import { Router } from "@angular/router";
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

    onLoginWithFacebook(eventData: Facebook.LoginEventData) {
        if (eventData.error) {
            alert("Error during login: " + eventData.error);
        } else {
            console.log(eventData.loginResponse.token);
        }
    }

    onSigninButtonTap(): void {
        const email = this.email;
        const password = this.password;
        
    }

    onSignUpButtonTap(): void {
        this.router.navigate(["/signUp"]);
    }

    onForgotPasswordTap(): void {
        this.router.navigate(["/password"]);
    }
}
