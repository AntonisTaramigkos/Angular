import { Component } from '@angular/core';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
    selector: 'app-component-input-example',
    standalone: true,
    templateUrl: './component-input-example.component.html',
    styleUrl: './component-input-example.component.css',
    imports: [PersonTableComponent]
})
export class ComponentInputExampleComponent {

  person0 = {
    givenName : "Antonis",
    surName :"Tara",
    age: 41,
    email: "a@afaf.ge",
    address:"Athens, Greece"

  };
person1 = {
    givenName : "George",
    surName :"Tara",
    age: 38,
    email: "a@afaf.ge",
    address:"thessaloniki, Greece"

  };

}
