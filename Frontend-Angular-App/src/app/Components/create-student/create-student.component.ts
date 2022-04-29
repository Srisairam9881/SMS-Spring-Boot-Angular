import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/Service/StudentService.service';
import { Student } from 'src/app/Student-Class/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  alert:boolean=false
  student:Student=new Student();
  constructor(private studentService:StudentService,private router:Router ) { }

  ngOnInit(): void {
  }
  saveStudent()
  {
  this.studentService.createStudent(this.student).subscribe(data=>{
  this.goToStudentList();
  },error=>console.log(error));
  }
  goToStudentList()
  {
  this.router.navigate(['/students']);
  }
  onSubmit()
  {
  this.saveStudent();
  }


}
