import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PartidaRoutingModule } from "./Partida-routing.module";
import { PartidaComponent } from "./Partida.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        PartidaRoutingModule
    ],
    declarations: [
        PartidaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PartidaModule { }
