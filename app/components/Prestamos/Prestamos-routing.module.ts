import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PrestamosComponent } from "./Prestamos.component";

const routes: Routes = [
    { path: "", component: PrestamosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PrestamosRoutingModule { }
