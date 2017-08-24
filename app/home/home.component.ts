import { Component } from "@angular/core";
import { AbstractMenuPageComponent } from "../abstract-menu-page-component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: "Home",
  moduleId: module.id,
  templateUrl: "./home.component.html"
})
export class HomeComponent extends AbstractMenuPageComponent {

  constructor(protected menuComponent: MenuComponent) {
    super(menuComponent);
  }
}
