import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "~/components/login/login.component";
import { HomeComponent } from "~/components/home/home.component";
import { SignUpComponent } from "~/components/signUp/signUp.component";
import { PerfilComponent } from "~/components/perfil/perfil.component";
import { PartidasYEventosComponent } from "~/components/partidasYEventos/partidasYEventos.component";
import { PrestamosComponent } from "~/components/Prestamos/Prestamos.component";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { ForgottenPasswordComponent } from "~/components/forgottenPassword/forgottenPassword.component";
import { PartidaComponent } from "~/components/Partida/Partida.component";
import { JuegoComponent } from "~/components/juego/juego.component";

const routes: Routes = [
    { path: "", component: LoginComponent},
    { path: "home", component: HomeComponent },
    { path: "signUp", component: SignUpComponent},
    { path: "perfil", component: PerfilComponent},
    { path: "partidas", component: PartidasYEventosComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full'},
            { path: 'partida/:id', component: PartidaComponent}
        ]
    },
    { path: "prestamos", component: PrestamosComponent,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full'},
            { path: 'juego/:id', component: JuegoComponent}
        ]
    },
    { path: "password", component: ForgottenPasswordComponent}
];

export const navigatableComponents = [
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    PerfilComponent,
    PartidasYEventosComponent,
    PrestamosComponent,
    ForgottenPasswordComponent,
    JuegoComponent,
    PartidaComponent
];

@NgModule({
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
        navigatableComponents
    ],
    bootstrap: [LoginComponent],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
