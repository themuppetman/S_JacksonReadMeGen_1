// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function getLicenseBadge(license) {

    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "Boost":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      case "BSD 3-Clause":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        default: "No License Used";
    }
  }
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== "none") {
      return `\n* [License](#license)`;
    }
    return "";
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  
  function renderLicenseSection(license) {
    if (license !== "none") {
      return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return "";
  }
  renderLicenseSection();
  getLicenseBadge();
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    const licenseBadge = getLicenseBadge(data.license);
    return `# ${data.title}
  by ${data.name} ${licenseBadge}  
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  
  ## Description
  ${data.description}  
  
  ## Installation
  ${data.installation}  
  
  ## Usage
  ${data.usage}  
  
  ## Contributing
  ${data.contributing}  
  
  ## Tests
  ${data.tests}  
  
  
  ## Questions
  If you have any questions, please contact me at ${data.email}.
  You can find more of my work at ${data.github}.
  
  ## License
  Licensed under the ${data.license} license.
  `;
  }
  
  module.exports = generateMarkdown;
  