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
          this.jobTitle +
          " " +
          this.payRate
      );
    }
    fullname() {
      return `${this.firstName} ${this.lastName} ${this.payRate}`;
    }
  }
  let me = new Employee ("1", "Uriel", "Delgado", "BofA staff", 400);
  me.displayIntro()