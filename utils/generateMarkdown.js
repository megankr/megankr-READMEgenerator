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
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Installation

${data.installation}

## Usage
${data.usage}

## Contributions

${data.contributions}

## Tests

${data.tests}

## License

${data.license}

## Questions

For any questions regarding this project, feel free to contact me through the following:
- Email: ${data.email}
- GitHub: https://github.com/${data.gitUser}

`;
}

module.exports = generateMarkdown;