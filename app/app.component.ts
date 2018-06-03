import { Component } from "@angular/core";
import { Fab } from 'nativescript-floatingactionbutton'
import { registerElement } from "nativescript-angular/element-registry";
registerElement("Fab", () => Fab);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent { }
