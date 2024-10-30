import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.scss'
})
export class EditStudentComponent {
  formEditStudent!: FormGroup;

  ngOnInit(): void {
    this.formEditStudent = new FormGroup({
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
    if (this.formEditStudent.valid) {
      console.log(this.formEditStudent.value);
    }
  }

  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty)

  }

}
