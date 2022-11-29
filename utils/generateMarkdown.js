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
  return `# ${
    data.title
    // link for license badge and replacing spaces with %20 followed by sections linking with the user input to create the readme
  } ![License](https://img.shields.io/badge/license-${data.license.replaceAll(
    " ",
    "%20"
  )}-blue)

 1. [Description](#description)
 2. [Installation](#installation)
 3. [Usage](#usage)
 4. [Contributing](#contributing) 
 5. [Test](#tests)
 6. [License](#license)
 7. [Questions](#questions)

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

 ## License
 ${data.license}

 ## Questions
[email](${data.email}) \
[Github](www.github.com/${data.username})
`;
}

module.exports = generateMarkdown;
