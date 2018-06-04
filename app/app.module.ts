import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { SignUpModule } from "~/components/signUp/signUp.module";
import { LoginModule } from "~/components/login/login.module";
import { HomeModule } from "~/components/home/home.module";
import { PerfilModule } from "~/components/perfil/perfil.module";
import { PartidasYEventosModule } from "~/components/partidasYEventos/partidasYEventos.module";
import { PrestamosModule } from "~/components/Prestamos/Prestamos.module";
import { JuegoModule } from "~/components/juego/juego.module";
import { PartidaModule } from "~/components/Partida/Partida.module";
import { LocalizacionComponent } from "~/components/localizacion/localizacion.component";
import { LocalizacionModule } from "~/components/localizacion/localizacion.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        HttpClientModule,
        LoginModule,
        HomeModule,
        SignUpModule,
        PerfilModule,
        PartidasYEventosModule,
        PrestamosModule,
        JuegoModule,
        PartidaModule,
        LocalizacionModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
