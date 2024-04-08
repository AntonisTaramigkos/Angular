import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { EPerson } from 'src/app/shared/interfaces/person';

@Component({
  selector: 'app-eperson-template-driven-form',
  standalone: true,
  imports: [FormsModule, MatFormField, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
export class EpersonTemplateDrivenFormComponent {
surName: any;
@Output() person = new EventEmitter<EPerson>()
onSubmit(value:any){
  console.log(value as EPerson)
  this.person.emit(value as EPerson)
}

}