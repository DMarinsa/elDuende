import { Component, OnInit } from "@angular/core";
import { DatePicker } from "tns-core-modules/ui/date-picker/date-picker";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { Page } from "tns-core-modules/ui/page/page";
import { Partida } from "~/dataModels/partidas";
import { partidasMock } from '../../mocks/partidasMock'

@Component({
    selector: "Partida",
    moduleId: module.id,
    templateUrl: "./Partida.component.html"
})
export class PartidaComponent implements OnInit {
    public nuevaPartida: any;
    public fechaActual: Date;
    constructor(private params: ModalDialogParams, private page: Page) {
        this.fechaActual = new Date(params.context);
        this.page.on("unloaded", () => {
            this.params.closeCallback();
        });
    }

    ngOnInit(): void {
        let datePicker: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datepicker");
        datePicker.date= this.fechaActual;
        datePicker.minDate = datePicker.date;
    }

    public anadirPartida() {
        let fecha: DatePicker = <DatePicker>this.page.getViewById<DatePicker>("datepicker");
        this.nuevaPartida.fecha = fecha.toLocaleString();
        partidasMock.push(this.nuevaPartida)
        this.params.closeCallback()
    }
}
