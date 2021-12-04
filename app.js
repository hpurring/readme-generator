const fs = require('fs');


fs.writeFile('./README.md', pageHTML, err => {
  if (err) throw err;

  console.log('README complete! Check out README.md to see the output!');
});



const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'project',
        message: 'What is your project called?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter the name of your project');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your application.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installaton',
        message: 'What are the installation steps?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please describe the installation process for your users.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide instructions and examples for use.');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators, if any: ',
      },
      {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
      },
      {
        type: 'input',
        name: 'features',
        message: 'Please list any features here: ',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how other developers can contribute: ',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide any relevant tests for your application: ',
      }
    ]);
  };

  promptUser()
    .then(promptProject)
    .then(portfolioData => {
      return generatePage(portfolioData);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
  });