"use strict"

class Person {
    constructor(firstName, lastName){
     this.firstName = firstName;
     this.lastName = lastName;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
  
    
}

class Employee extends Person{
    constructor(firstName, lastName, id, jobTitle, payRate){
        super(firstName, lastName)
        this.id = id 
        this.jobTitle = jobTitle
        this.payRate = payRate 
    }
   introduction(){
    return `My name is ${super.getFullName()} `
   }
   EmployeeInfo(){
    return `My name is ${super.getFullName()} Employ id is ${this.id}, , i work in ${this.jobTitle} my pay rate is $${this.payRate}`
   }

   getGrossPay(hoursWorked){
    return hoursWorked * `${this.payRate}`;
   }

}


const person1 = new Person('uriel', 'delgado');
console.log(person1.getFullName());
const employee1 = new Employee('uriel', 'delgado', 1, "AppDev", 5000)
console.log(employee1.EmployeeInfo());
const employee2 = new Employee('Rene', 'Banuelos')
console.log(employee2.introduction());
const employee3 = new Employee('3', 'Remsey', 'teacher', 'instructer', 400)
console.log(employee3.getGrossPay(8));
console.log(employee1.getGrossPay(8));



