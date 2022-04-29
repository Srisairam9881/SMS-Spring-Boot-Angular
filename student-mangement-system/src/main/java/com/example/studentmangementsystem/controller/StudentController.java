package com.example.studentmangementsystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.studentmangementsystem.exception.ResourceNotFoundException;
import com.example.studentmangementsystem.model.Student;
import com.example.studentmangementsystem.repository.StudentRepository;

@CrossOrigin("http://localhost:4200/")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;
	
	//get All Students
	@GetMapping("/students")
	public List<Student> getAllStudents()
	{
	 return studentRepository.findAll();
	}
	
	//Create Student
	@PostMapping("/students")
	public Student createStudent(@RequestBody Student stu)
	{
	return studentRepository.save(stu);
	}
	//get Student by id
	@GetMapping("/students/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long id) throws ResourceNotFoundException
	{
	Student stu=studentRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Student not exist with id: "+id));
	return ResponseEntity.ok(stu);
	}
	//Update student
	@PutMapping("students/{id}")
	public ResponseEntity<Student> updateStudent(@PathVariable Long id,@RequestBody Student studentDetails) throws ResourceNotFoundException
	{
	Student stu=studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: "+id));
	stu.setName(studentDetails.getName());
	stu.setAge(studentDetails.getAge());
	stu.setDob(studentDetails.getDob());
	stu.setGender(studentDetails.getGender());
	stu.setEmail(studentDetails.getEmail());
	stu.setPhoneNo(studentDetails.getPhoneNo());
	stu.setPercentage(studentDetails.getPercentage());
	Student updateStudent=studentRepository.save(stu);
	return ResponseEntity.ok(updateStudent);
	}
	//delete Student
	@DeleteMapping("/students/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id) throws ResourceNotFoundException{
	Student stu=studentRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Student not exist with id: "+id));
	studentRepository.delete(stu);
	Map<String, Boolean> response=new HashMap<>();
	response.put("deleted",Boolean.TRUE);
	return ResponseEntity.ok(response);
	}


}
