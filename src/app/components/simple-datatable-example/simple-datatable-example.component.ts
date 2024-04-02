import { Component } from '@angular/core';
import { ManyPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-simple-datatable-example',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  // @Input() data:EPerson[];
  manyperson = ManyPerson;


}
