import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Service/StudentService.service';
import { Student } from 'src/app/Student-Class/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id!:number;
  student!:Student;
  constructor(private studentService:StudentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  this.student=new Student();
  this.studentService.getStudentById(this.id).subscribe(data=>{
  this.student=data;
  });
  }
  url="./assets/StudentDetails.png";

}
