// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

##  Description 
-  ${data.description}

## Table of Contents
- ${data.contents}

## Installation
- ${data.installation}

## Usage
- ${data.usage}

## Credit
- ${data.credit}

## License
- ${data.licence}
`;
}

module.exports = generateMarkdown;
