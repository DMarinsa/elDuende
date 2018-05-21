import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ForgottenPasswordRoutingModule } from "./forgottenPassword-routing.module";
import { ForgottenPasswordComponent } from "./forgottenPassword.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ForgottenPasswordRoutingModule
    ],
    declarations: [
        ForgottenPasswordComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ForgottenPasswordModule { }
