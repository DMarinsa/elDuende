import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { LocalizacionComponent } from "./localizacion.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptFormsModule,
        NativeScriptModule
    ],
    declarations: [
        LocalizacionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LocalizacionModule { }
