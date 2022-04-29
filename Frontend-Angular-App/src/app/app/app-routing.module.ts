import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './Components/create-student/create-student.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { StudentListComponent } from './Components/student-list/student-list.component';
import { UpdateStudentComponent } from './Components/update-student/update-student.component';

const routes: Routes = [
  {path:'students',component:StudentListComponent},
  {path:'create-student',component:CreateStudentComponent},
  {path:'',redirectTo:'students',pathMatch:'full'},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'student-details/:id',component:StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
