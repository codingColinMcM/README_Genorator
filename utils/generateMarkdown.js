// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

1. [ Installation Instructions. ](#inst)
2. [ Usage Information. ](#info)
3. [ Contribution Guidelines. ](#guide)
4. [ Test Instructions. ](#test)
5. [ If you have questions, contact me at. ](#quest)

<a name="inst"></a>
## Installation Instructions

${data.instructions}

<a name="info"></a>
## Usage Information

${data.usage}

<a name="guide"></a>
## Contribution Guidelines

${data.contribution}

<a name="test"></a>
## Test Instructions

${data.test}

<a name="quest"></a>
## If you have questions, contact me at

https://github.com/${data.user}

### or email me at

${data.email}
`;
}

module.exports = generateMarkdown;
