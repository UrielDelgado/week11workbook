"use strict"; // Setting Javascript in Strict mode.

window.onload = () => {
  // Call the init function to add the eventlisteners

  //init = Initialize -> setting it up
  //For  Eventlisteners, or Reset or clearing thing // Creating Dropdowns
  initEventListeners();
  initUserPreferences();
};

function initUserPreferences() {


    let userPreferences = {
        backgroundColor: "blue",
        language: "US"
    }

    localStorage.setItem("userPreferences",JSON.stringify(userPreferences))
    let userPreferencesJSON = localStorage.getItem("userPreferences",JSON.parse(userPreferences));
    document.body.style.backgroundColor = userPreferencesJSON.backgroundColor;

  
}
function initEventListeners() {
  // Retrieve the buttons by their IDs
  const blueButton = document.getElementById("blue_button");
  const redButton = document.getElementById("red_button");
  const greenButton = document.getElementById("green_button");

  //Add event listeners to the buttons
  blueButton.addEventListener("click", function () {
    console.log("Blue button clicked");
  });

  // Add your desired functionality for the red button here
  blueButton.addEventListener("click", function () {
    // Change background color to blue
    document.body.style.backgroundColor = "blue";

    // Store the selected color in localStorage
    localStorage.setItem("selectedColor", "blue");
  });

  redButton.addEventListener("click", function () {
    // Change background color to red
    document.body.style.backgroundColor = "red";

    // Store the selected color in localStorage
    localStorage.setItem("selectedColor", "red");
  });

  greenButton.addEventListener("click", function () {
    // Change background color to green
    document.body.style.backgroundColor = "green";

    // Store the selected color in localStorage
    localStorage.setItem("selectedColor", "green");
  });

 
}