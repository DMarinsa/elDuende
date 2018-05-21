import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PerfilRoutingModule } from "./perfil-routing.module";
import { PerfilComponent } from "./perfil.component";

@NgModule({
    imports: [
        NativeScriptModule,
        PerfilRoutingModule
    ],
    declarations: [
        PerfilComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PerfilModule { }
