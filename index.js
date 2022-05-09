// Installed packages
const fs = require('fs');
const inquirer = require('inquirer')

// Team Variables
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateTeamPro = require('./src/generateTeamPro');

const teamQuestions = [];


// Team Profile Preguntas
const getManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Manager?',
        },
    
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Manager?'
        },
    
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Manager?'
        },
    
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the managers office number?',
        }
    ])

    .then(managerAnswers => {
        const {name, id, email, officeNumber} = managerAnswers;
        const manager = new Manager (name, id, email, officeNumber);
        teamQuestions.push(manager);
        console.log("Manager's card has been created!")
    })
}
    

const getEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'title',
            message: 'Do you need to add an Engineer or Intern to the team?',
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message:'What is the name of the team member?',
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the team member?',
        },

        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the team member?',
        },

        {
            type: 'input',
            name: 'github',
            message: 'What is the github username for Engineer?'
        },

        {
            type: 'input',
            name: 'school',
            message: 'What is the school name for the Intern?'
        },

    ])

    .then(employeeInfo => {
        let { name, id, email, role, github, school, confirmEmployee } = employeeInfo; 
        let employee; 

        if (title === "Engineer") {
            employee = new Engineer (name, id, email, github);

        } else if (title === "Intern") {
            employee = new Intern (name, id, email, school);
        }

        teamQuestions.push(employee); 

        if (confirmEmployee) {
            return getEmployee(teamQuestions); 
        } else {
            return teamQuestions;
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
getManager()
.then(getEmployee)
.then(teamQuestions => {
    return generateTeamPro(teamQuestions);
})
.then(generateHTML => {
    return writeFile(generateHTML);
})