package com.example.studentmangementsystem.model;



import java.sql.Date;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String name;
	private int age;
	private String dob;
	private String gender;
	private String email;
	private int phoneNo;
	private String percentage;
	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Student(String name, int age, String dob, String gender, String email, int phoneNo, String percentage) {
		super();
		this.name = name;
		this.age = age;
		this.dob = dob;
		this.gender = gender;
		this.email = email;
		this.phoneNo = phoneNo;
		this.percentage = percentage;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public int getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(int phoneNo) {
		this.phoneNo = phoneNo;
	}
	public String getPercentage() {
		return percentage;
	}
	public void setPercentage(String percentage) {
		this.percentage = percentage;
	}
	
public String convertDateToString(Date dt) {
DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
String dateToString = df.format(dt);
return dateToString;
}

public String convertDateToString(Date dt, String pattern) {
DateFormat df = new SimpleDateFormat(pattern);
dob = df.format(dt);
return dob;
}
	

}
