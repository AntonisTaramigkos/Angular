// import { Component } from '@angular/core';
import {
  Dialog,
  DialogModule
} from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';


@Component({
  selector: 'app-component-output-example',
  standalone: true,
  imports: [DialogModule,  SimpleDatatableComponent],
  templateUrl: './component-output-example.component.html',
  styleUrl: './component-output-example.component.css',
})
export class ComponentOutputExampleComponent {
  manyPerson = ManyPerson;

  onPersonClicked(person: EPerson) {
    // console.log(person);
    // alert(this.personTemplate(person));
    this.dialog.open(PersonDialogComponent,{
      data:person,
      
    });
  }

  constructor(public dialog: Dialog) {}
  personTemplate(person: EPerson) {
    return `
    Person Details:

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `;
  }
}
@Component({
  imports:[PersonTableComponent],
  standalone: true,
  template : `
  <app-person-table [person]="person"></app-person-table>
  <button class=" btn btn-primary btn-sm " (click)=" dialogRef.close()">Close</button>
     `,
     styles: [
      `
        :host {
          display: block;
          background: #fff;
          border-radius: 8px;
          padding: 16px;
          max-width: 500px;
        }
      `,
    ],

})
class PersonDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PersonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public person: EPerson,
  ) {}
}