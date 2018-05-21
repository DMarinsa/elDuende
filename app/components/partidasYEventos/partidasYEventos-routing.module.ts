import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { PartidasYEventosComponent } from "./partidasYEventos.component";

const routes: Routes = [
    { path: "", component: PartidasYEventosComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class PartidasYEventosRoutingModule { }
