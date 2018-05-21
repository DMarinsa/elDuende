import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PartidasYEventosRoutingModule } from "./partidasYEventos-routing.module";
import { PartidasYEventosComponent } from "./partidasYEventos.component";

@NgModule({
    imports: [
        NativeScriptModule,
        PartidasYEventosRoutingModule
    ],
    declarations: [
        PartidasYEventosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PartidasYEventosModule { }
