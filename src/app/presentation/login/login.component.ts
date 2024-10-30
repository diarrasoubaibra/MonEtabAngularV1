import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  onSubmit(): void {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.router.navigate(['/dashboard']);
    }
  }

  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty)

  }
}
