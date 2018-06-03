import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(private router: Router,
                private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onPartidasTap(): void{
        this.router.navigate(["/partidas"]);
    }

    onLudotecaTap(): void{
        this.router.navigate(["/prestamos"]);
    }

    onPerfilTap(): void{
        this.router.navigate(["/perfil"]);
    }

    onLocalizacionTap(): void{
        this.router.navigate(["/localizacion"]);
    }

    goBack(){
        this.routerExtensions.backToPreviousPage();
    }
}
