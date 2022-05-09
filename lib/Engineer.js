// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require("./Employee");
 
class Engineer extends Employee {
    constructor (name, id, email, github) { 
        super (name, id, email);
        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}




// Engineer module.export
module.exports = Engineer;