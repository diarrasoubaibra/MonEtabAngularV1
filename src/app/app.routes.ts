import { Routes } from '@angular/router';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { StudentComponent } from './presentation/student/student.component';
import { TeacherComponent } from './presentation/teacher/teacher.component';
import { UserComponent } from './presentation/user/user.component';
import { RapportComponent } from './presentation/rapport/rapport.component';
import { LoginComponent } from './presentation/login/login.component';
import { AddStudentComponent } from './presentation/add-student/add-student.component';
import { AddUserComponent } from './presentation/add-user/add-user.component';
import { TeacherFormComponent } from './presentation/teacher-form/teacher-form.component';
import { EditUserComponent } from './presentation/edit-user/edit-user.component';
import { EditStudentComponent } from './presentation/edit-student/edit-student.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'add-student', component: AddStudentComponent },
    { path: 'edit-student', component: EditStudentComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'edit-user', component: EditUserComponent },
    { path: 'teachers/add', component: TeacherFormComponent },
    { path: 'teachers/edit', component: TeacherFormComponent },
  { path: 'students', component: StudentComponent },
  { path: 'teachers', component: TeacherComponent },
  { path: 'users', component: UserComponent },
  { path: 'rapport', component: RapportComponent },
  { path: 'logout', component: LoginComponent },
  { path: '', component: LoginComponent },

];
