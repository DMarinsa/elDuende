import { Component, OnInit } from "@angular/core";

/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "forgottenPassword", loadChildren: "./forgottenPassword/forgottenPassword.module#ForgottenPasswordModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "ForgottenPassword",
    moduleId: module.id,
    templateUrl: "./forgottenPassword.component.html"
})
export class ForgottenPasswordComponent implements OnInit {
    constructor() {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }
}
