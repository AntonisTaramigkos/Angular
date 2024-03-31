import { Component } from '@angular/core';
import { PersonTableComponent } from './compoments/person-table/person-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  name = "Antonis";

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
  
    }
}
