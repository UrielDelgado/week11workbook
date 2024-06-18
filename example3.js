// Define the Person class(super class)

class Person {
    constructor(firstName, lastName, age, gender,) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    introduce() {
        return `Hello, my name is ${this.getFullName()}.`;
    }
    introduceMe() {
        return `Hello my name is ${this.firstName} ${this.lastName} and im am ${this.age} years old and i'm a student enrolled in ${this.course} `
        }
  }

  
// Define the Student class that extends the Person class
class Student extends Person {
    constructor(firstName, lastName, age, gender, studentId, course) {
        super(firstName, lastName, age, gender);
        this.studentId = studentId;
        this.course = course;
    }
    introduce() {
        return `${super.introduce()} I am a student enrolled in the ${this.course} course.`;
    }
    getStudentInfo() {
        return `Student ID: ${this.studentId}, Course: ${this.course}`;
    }

 
  }

// Example usage
const person1 = new Person('Jane', 'Smith', 30, 'Female');
console.log(person1.introduce()); // Output: Hello, my name is Jane Smith.
const student1 = new Student('John', 'Doe', 20, 'Male', 'S12345', 'Computer Science');
console.log(student1.introduce()); // Output: Hello, my name is John Doe. I am a student enrolled in the Computer Science course.
console.log(student1.getStudentInfo()); // Output: Student ID: S12345, Course: Computer Science
const student2 = new Student('Uriel', 'Delgado', 20, "Male", "S9876", "Computer Science")
console.log(student2.introduceMe());