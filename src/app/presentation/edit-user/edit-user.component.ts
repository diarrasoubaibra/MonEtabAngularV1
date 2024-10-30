import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent implements OnInit {
  formEditUser!: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.formEditUser = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required)
    });

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.loadUserData(userId);
    }
  }

  loadUserData(id: string): void {
    // Charger les données de l'utilisateur via un service
    const userData = {
      pseudo: 'ExempleUser',
      password: 'password123',
      confirmPassword: 'password123'
    };
    this.formEditUser.patchValue(userData);
  }

  onSubmit(): void {
    if (this.formEditUser.valid) {
      console.log('Modification de l’utilisateur:', this.formEditUser.value);
      // Logique pour mettre à jour l’utilisateur
      this.router.navigate(['/users']);
    }
  }

  isInvalidInput(fieldName: string): boolean {
    const field = this.formEditUser.get(fieldName);
    return field ? field.invalid && (field.touched || field.dirty) : false;
  }
}
