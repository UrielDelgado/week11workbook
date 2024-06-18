"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      this.employeeId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
    // The displayIntro() method
    displayIntro() {
      console.log(
        "Hi! I'm " +
          this.firstName +
          " " +
          this.lastName +
          " and I am a " +
          this.jobTitle
      );
    }
  
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  let employee1 = new Employee("1", "Ezra", "Aiden", "Theater Teacher", 38.46);
  let employee2 = new Employee("2", "Elisha", "Aslan", "Game Programmer", 43.27);
  employee1.displayIntro();
  employee2.displayIntro();
  console.log(employee2.fullname());
  
  
  // Defines the blueprint for a Course object
  class Course {
  
    // The constructor method is called when a new instance of Course is created.
    // It initializes the properties of the Course object with the given values.
    constructor(_id, _name, _price) {
      this.id = _id;     // Assigns the given id to the id property of the Course object
      this.name = _name; // Assigns the given name to the name property of the Course object
      this.price = _price; // Assigns the given price to the price property of the Course object
    }
    displaycourseInfo(){
      console.log(`${this.name}: $${this.price}`);
    }
    //Define function without the keyword Function ...and it only works on the courses object that you have created.
    displayInformation() {
      console.log("Course: " + this.name);
    }
  }
  
  
  let course1 = new Course(21, "Python Fundamentals", 125);
  console.log(course1);
  
  course1.displaycourseInfo();