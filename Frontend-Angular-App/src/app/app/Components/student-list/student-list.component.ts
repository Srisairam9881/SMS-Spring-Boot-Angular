import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/StudentService.service';
import { Student } from 'src/app/Student-Class/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students!:Student[];
  constructor(private studentService:StudentService,private router:Router) { }

  ngOnInit(): void {
  this.getStudents();
  }
  private getStudents()
  {
  this.studentService.getStudentList().subscribe(data =>{
  this.students=data;
  //console.log(data) it show's data in console
  });
  }
  studentDetails(id:number)
  {
  this.router.navigate(['/student-details',id]);
  }

  updateStudent(id:number)
  {
  this.router.navigate(['/update-student',id]);
  }
  deleteStudent(id:number)
  {
  this.studentService.delteStudent(id).subscribe(data=>{
  this.getStudents();
  });
  }
  delete="./assets/Delete.png";
  edit="./assets/Edit.png";
  details="./assets/Details.png";
}
