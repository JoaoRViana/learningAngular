import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

type inputTypes = 'text'|'email'|'password'

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() type:inputTypes = 'text';
  @Input() formName:string = '';
  @Input() placeholder:string = '';
  @Input() label:string = '';
}
