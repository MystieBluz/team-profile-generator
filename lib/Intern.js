// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee');


// Creating Intern Constructor
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school
    }

    createSchool () {
        return this.school
    }

    getTitle () {
        return 'Intern';
    }
    
    
};



// Intern module.export
module.exports = Intern;