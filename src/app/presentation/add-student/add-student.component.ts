import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  
  formAddStudent!: FormGroup;

  ngOnInit(): void {
    this.formAddStudent = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      matricule: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      classe: new FormControl('', Validators.required),
      telephone: new FormControl('', [Validators.required]),
      ville: new FormControl('', Validators.required)
    })
  }
  onSubmit(): void {
    if (this.formAddStudent.valid) {
      console.log(this.formAddStudent.value);
    }
  }

  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty)

  }
}
