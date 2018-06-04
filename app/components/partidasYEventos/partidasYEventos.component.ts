import { Component, OnInit, ViewContainerRef, ChangeDetectionStrategy } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { partidasMock } from '../../mocks/partidasMock';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular/modal-dialog";
import { PartidaComponent } from "~/components/Partida/Partida.component";
/* ***********************************************************
* Before you can navigate to this page from your app, you need to reference this page's module in the
* global app router module. Add the following object to the global array of routes:
* { path: "partidasYEventos", loadChildren: "./partidasYEventos/partidasYEventos.module#PartidasYEventosModule" }
* Note that this simply points the path to the page module file. If you move the page, you need to update the route too.
*************************************************************/

@Component({
    selector: "PartidasYEventos",
    moduleId: module.id,
    templateUrl: "./partidasYEventos.component.html",
    styleUrls: ['./partidasYEventos.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class PartidasYEventosComponent implements OnInit {
    public listaPartidas = partidasMock;
    constructor(
        private routerExtensions: RouterExtensions,
        private modalService: ModalDialogService, 
        private vcRef: ViewContainerRef
    ) {
        /* ***********************************************************
        * Use the constructor to inject app services that you need in this component.
        *************************************************************/
    }

    ngOnInit(): void {
    }

    goBack(){
        this.routerExtensions.backToPreviousPage();
    }
    addPartida(){
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            fullscreen: false
        };
        this.modalService.showModal(PartidaComponent, options)
            .then( () => {
            }).catch( (err) => alert(err.message));
    }
}
