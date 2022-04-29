import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Student-Class/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl = "http://localhost:8080/api/v1/students";
  constructor(private httpClient:HttpClient) { }

  //Get All students
  getStudentList():Observable<Student[]>
  {
  return this.httpClient.get<Student[]>(`${this.baseUrl}`);
  }
  
  //Add Record
  createStudent(student:Student):Observable<object>
  {
  return this.httpClient.post(`${this.baseUrl}`,student);
  }

  //get Student By Id
  getStudentById(id:number):Observable<Student>
  {
  return this.httpClient.get<Student>(`${this.baseUrl}/${id}`);
  }

  //Update Student
  updateStudent(id:number,student:Student):Observable<object>
  {
  return this.httpClient.put(`${this.baseUrl}/${id}`,student);
  }

  //delete Student
  delteStudent(id:number):Observable<object>
  {
  return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
