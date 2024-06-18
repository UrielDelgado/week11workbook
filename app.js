"use strict";

window.onload = () => {
  // Call the init function to add the eventlisteners
  //init = Initialize -> setting it up
  //For  Eventlisteners, or Reset or clearing thing // Creating Dropdowns
  // initFirstFunction();
};

function user_button() {
  const email = document.getElementById("floatingInput").value;
  const password = document.getElementById("floatingPassword").value;
  const username = document.getElementById("floatingUser").value;
  let user1 = new User(username, password, email);
  user1.greetUser();
}

//A class is blueprint or description of an object
class User {
  //Creating the syntax for creating new user objects

  //It adds new options for validation when creating new objects

  constructor(_username, _password, _email) {
    this.name = _username;
    this.password = _password;
    this.email = _email;
 

    greetUser() 
    {
      console.log(`Hi, my name is ${this.name}`);
    }



  }
}