// Installed packages
const fs = require('fs');
const inquirer = require('inquirer')

// Team Variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeamPro = require('./src/generateTeamPro');

const teamArray = [];


// Team Profile Preguntas
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?', 
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the managers ID?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the managers email?",
        },

        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers office number?",
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Does the team have any Engineers or Interns?",
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: "What is the name of the team member?", 
        },

        {
            type: 'input',
            name: 'id',
            message: "What is the team members ID?",
        },

        {
            type: 'input',
            name: 'email',
            message: "What is the team members email?",
        },

        {
            type: 'input',
            name: 'github',
            message: "What is the team members github username? (Engineers Only)",
        },

        {
            type: 'input',
            name: 'school',
            message: "What is the team members school? (Interns Only)",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

// Function to write file
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Congrats! The team profile has been generated!")
        }
    })
}; 


// Function to begin generating team profile
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateTeamPro(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });