// Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![Static Badge](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
    'None': ''
  };

  return licenseLinks[license] || '';
}

// Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return 'This project doesn\'t have a license.';
}

// Creates a function to generate markdown for README
function generateReadme(answers) {
  return `# ${answers.title}

  ${renderLicenseBadge(answers.license)}

  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  ${renderLicenseSection(answers.license)}

  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.tests}

  ## Questions
  For any questions, please contact me at ${answers.email} or visit my GitHub profile.
`;
}

module.exports = generateReadme;
