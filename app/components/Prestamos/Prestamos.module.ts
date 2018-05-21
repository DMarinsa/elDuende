import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PrestamosRoutingModule } from "./Prestamos-routing.module";
import { PrestamosComponent } from "./Prestamos.component";

@NgModule({
    imports: [
        NativeScriptModule,
        PrestamosRoutingModule
    ],
    declarations: [
        PrestamosComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrestamosModule { }
