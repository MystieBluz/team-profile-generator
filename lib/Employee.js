// Creating Employee Constructor -- applied to each team member
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // returning name from input
    getName () {
        return this.name;
    }

    // returning ID from input
    getId () {
        return this.id;
    }   

    // returning email from input
    getEmail () {
        return this.email;
    }

    // returning employee type 
    getRole () {
        return 'Employee'; 
    }
};

// Employee Module -- each team memeber section will need to have a module.exports
module.exports = Employee;