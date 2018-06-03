import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "partidasYEventos", loadChildren: "./partidasYEventos/partidasYEventos.module#PartidasYEventosModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "PartidasYEventos",
    moduleId: module.id,
    templateUrl: "./partidasYEventos.component.html",
    styleUrls: ['./partidasYEventos.component.css']
})
export class PartidasYEventosComponent implements OnInit {
    public partidas=[ 1,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,51,2,3,4,5];
    constructor(
        private routerExtensions: RouterExtensions
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
        /* ***********************************************************
        * Use the "ngOnInit" handler to initialize data for this component.
        *************************************************************/
    }

    goBack(){
        this.routerExtensions.backToPreviousPage();
    }
}
