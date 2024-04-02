import { Component } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css'
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;
  onPersonClicked(person: EPerson){
    alert(person);
  }

  personTemplate(person :EPerson){
    return
    `Person Details:
    First Name: ${person.givenName}
    last Name: ${person.surName}`
  }

}
