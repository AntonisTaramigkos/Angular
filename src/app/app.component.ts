import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {  
  name = "Antonis";

  person = {
    givenName : "Antonis",
    surName :"Tara",
    age: 41,
    email: "a@afaf.ge"

  }
}
