// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") return "";
  if (license === "MIT")
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  if (license === "Apache")
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  if (license === "Creative Commons")
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  if (license === "GNU General Public License")
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";
  if (license === "MIT") return "https://opensource.org/licenses/MIT";
  if (license === "Apache") return "https://opensource.org/licenses/Apache-2.0";
  if (license === "Creative Commons")
    return "http://creativecommons.org/publicdomain/zero/1.0/";
  if (license === "GNU General Public License")
    return "https://www.gnu.org/licenses/gpl-3.0";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") return "";

  return `${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents

  - [${data.title}](#${data.title.toLowerCase().split(" ").join("-")})
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing Guidelines](#contributing-guidelines)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing Guidelines

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  ${data.username}
  ${data.email}

  ## License

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
