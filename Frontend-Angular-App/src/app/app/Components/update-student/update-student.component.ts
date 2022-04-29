import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/Service/StudentService.service';
import { Student } from 'src/app/Student-Class/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id!:number;
  student:Student=new Student();
  constructor(private studentService:StudentService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data=>{
    this.student=data;
    },error=>console.log(error));
  }
  updateStudent()
  {
  this.studentService.updateStudent(this.id,this.student).subscribe(data=>{
  this.goListStudent();
  },error=>console.log(error));
  }

  onSubmit()
  {
  this.updateStudent();
  }

  goListStudent()
  {
  this.router.navigate(['/students']);
  }

}
