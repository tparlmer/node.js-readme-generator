// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { writeFile } = require("./Develop/utils/generateMarkdown");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    // Question #1 - Project Title
    {
      type: "input",
      name: "title",
      message: "Enter your project's title (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title for your project");
          return false;
        }
      },
    },
    // Question #2 - Project Description
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
    // Question #3 - Installation
    {
      type: "input",
      name: "installation",
      message: "Enter installation instructions for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter installation instructions for your project"
          );
          return false;
        }
      },
    },
    // Question #4 - Usage
    {
      type: "input",
      name: "usage",
      message: "Enter usage information for your project",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter usage information for your project");
          return false;
        }
      },
    },
    // Question #5 - Contribution
    {
      type: "input",
      name: "contribution",
      message: "Enter your contribution guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter contribution guidelines for your project");
          return false;
        }
      },
    },
    // Question #6 - Test
    {
      type: "input",
      name: "test",
      message: "Enter your testing guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter testing guidelines for your project");
          return false;
        }
      },
    },
    // Question #7 - Software License
    {
      type: "list",
      name: "license",
      message: "Choose a software license for this project (Required)",
      choices: ["MIT", "AGPL-3.0", "GPL-3.0", "N/A"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license for your project");
          return false;
        }
      },
    },
    // Question #8 - Github Username
    {
      type: "input",
      name: "github",
      message: "Enter your github username (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your github username");
          return false;
        }
      },
    },
    // Question #9 - Email
    {
      type: "input",
      name: "title",
      message: "Enter your email address (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your email address");
          return false;
        }
      },
    },
  ]);
};

// TODO: Create a function to initialize app
function init() {
  promptUser().then((data) => {
    writeFile(data);
  });
}

// Function call to initialize app
init();
