// Employee is Parent to other team classes (i.e. manager, engineer and intern)
const Employee = require('./Employee');

// Creating Constructor Class 
class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super (name, id, email);
        this.officeNumber = officeNumber
    }

    createOfficeNumber () {
        return this.officeNumber
    }
    
    getTitle () {
        return 'Manager';
    }
    
};




module.exports = Manager;