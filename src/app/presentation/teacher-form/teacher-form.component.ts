import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-teacher-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './teacher-form.component.html',
  styleUrl: './teacher-form.component.scss'
})
export class TeacherFormComponent implements OnInit {
  formTeacher!: FormGroup;
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    
    this.formTeacher = new FormGroup({
      nom: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      dateNaissance: new FormControl('', Validators.required),
      matiere: new FormControl('', Validators.required),
      telephone: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)]),
      ville: new FormControl('', Validators.required)
    });

    const teacherId = this.route.snapshot.paramMap.get('id');
    this.isEditMode = !!teacherId;

    if (this.isEditMode) {
      this.loadTeacherData(teacherId!);
    }
  }
  loadTeacherData(arg0: string) {
    throw new Error('Method not implemented.');
  }
  onSubmit(): void {
    if (this.formTeacher.valid) {
      if (this.isEditMode) {
        console.log('Modification du professeur:', this.formTeacher.value);

      } else {
        console.log('Ajout d’un nouveau professeur:', this.formTeacher.value);
      }
      this.router.navigate(['/teachers']);
    }
  }
  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty)

  }
}
