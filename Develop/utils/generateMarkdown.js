// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateReadme(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project is licensed under the ${answers.license} license.

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## Questions
  For any questions, please contact me at ${answers.email} or visit my GitHub profile.
`;
}

module.exports = generateReadme;
