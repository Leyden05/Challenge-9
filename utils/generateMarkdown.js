// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license === 'MIT' ? '(https://img.shields.io/bower/l/bootstrap)'
  : license === 'Apache 2.0' ? '(https://img.shields.io/hexpm/l/plug)'
  : license === 'GPL' ?  '(https://img.shields.io/eclipse-marketplace/l/notepad4e)' 
  : ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license === 'Apache 2.0' ? '(https://www.apache.org/licenses/LICENSE-2.0)' :
  license === 'MIT' ? '(https://opensource.org/licenses/MI)' :
  license === 'GNU v3.0' ? '(https://www.gnu.org/licenses/gpl-3.0.en.html)' 
  : ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== null  ? `This application is under a ${license} license.` 
  : ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license[0])} ${renderLicenseLink(data.license[0])}
# ${data.title}

## Description
${data.description}

## Table of Contents
${data.toc}

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license[0])}

## Contributions
${data.contributions}

## Tests
${data.tests}

## Improvements
${data.improvements}
`;
}

module.exports = generateMarkdown;
