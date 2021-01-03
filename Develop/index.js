const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Write a brief desription of your project"
  },
  {
    type: "input",
    name: "installation",
    message: "Provide any steps required to install your project"
  },
  {
    type: "input",
    name: "usage",
    message: "List any examples and instructions for use. Feel free to include screenshots or screenvideos as needed"
  },
  {
    type: "input",
    name: "license",
    message: "If applicable, please list any license(s) for your project",
  },
  {
    type: "input",
    name: "contributing",
    message: "List any contributors you'd like to add"
  },
  {
    type: "input",
    name: "tests",
    message: "Would you like to to run any tests for your project?"
  },
  {
    type: "input",
    name: "questions",
    message: "Provide your e-mail address for contact use on questions"
  }
];

// function to write README file
function writeToFile(fileName, data) {

};

// function to initialize program
function init() {
    
}

// function call to initialize program
init();
