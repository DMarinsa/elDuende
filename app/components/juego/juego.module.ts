import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { JuegoRoutingModule } from "./juego-routing.module";
import { JuegoComponent } from "./juego.component";

@NgModule({
    imports: [
        NativeScriptModule,
        JuegoRoutingModule
    ],
    declarations: [
        JuegoComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class JuegoModule { }
