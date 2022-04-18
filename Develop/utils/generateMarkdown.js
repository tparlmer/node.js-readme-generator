const fs = require('fs'); 

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === "AGPL-3.0") {
    data.licenseBadge = "AGPL_v3";
  }
  if (data.license === "GPL-3.0") {
    data.licenseBadge = "GPLv3";
  }
  if (data.license === "MIT") {
    data.licenseBadge = "MIT";
  }
  else {
    "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (data.license === "AGPL-3.0") {
    data.licenseLink = "agpl-3.0";
  }
  if (data.license === "GPL-3.0") {
    data.licenseLink = "gpl-3.0";
  }
  if (data.license === "MIT") {
    data.licenseLink = "mit";
  }
  else {
    "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license) {
    "";
  }
}

// Interpolate variables with ${<variable>} syntax

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## License
  ${data.license}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  Any Questions? Please reachout to me at ${data.email}
  In addition, you can view this project and others at https://github/${data.github}

`;
}

function writeFile (data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./index.md", generateMarkdown(data), (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ok: true, message: "index.md created" });
    });
  });
};

// Must export ab object with functionality from this page included
module.exports = {
  writeFile,
};
