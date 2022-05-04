// Creating Constructor Class 
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber
    }

    managerOfficeNumber () {
        return this.officeNumber
    }
    
    
};

// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee');


module.exports = Manager;