import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { PartidasYEventosRoutingModule } from "./partidasYEventos-routing.module";
import { PartidasYEventosComponent } from "./partidasYEventos.component";

@NgModule({
    imports: [
        NativeScriptModule,
        PartidasYEventosRoutingModule,
    ],
    declarations: [
        PartidasYEventosComponent
    ],
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PartidasYEventosModule { }
