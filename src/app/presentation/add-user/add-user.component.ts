import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  formAddUser!: FormGroup;

  ngOnInit(): void {
    this.formAddUser = new FormGroup({
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', Validators.required)
    })
  }
  onSubmit(): void {
    if (this.formAddUser.valid) {
      console.log(this.formAddUser.value);
    }
  }

  isInvalidInput(field: AbstractControl){
    return field.invalid && (field.touched || field.dirty)

  }
}
