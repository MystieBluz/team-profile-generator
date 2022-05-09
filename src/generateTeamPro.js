// Functions to generate html Team Profile
const createManager = (manager) => {
    return `<div class="col-3 mt-4">
        <div span class="border border-dark"></span>
        <div class="card-header text-black bg-light" >
            <h3>${manager.name}</h3>
            <h5><i class="fa-solid fa-user-ninja"></i>Manager</h5>
        </div>
        <!-- Card 1 Info -->
        <div class="list-group-item card-body text-black bg-info">
            <p class="id">ID: ${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
</div>`
}

const createEngineer = (engineer) => {
    return `<div class="col-3 mt-4">
    <div span class="border border-dark"></span>
        <div class="card-header text-black bg-light">
            <h3>${engineer.name}</h3>
            <h5><i class="fa-solid fa-user-astronaut"></i>Engineer</h5>
        </div>
        <!-- Card 2 Info -->
        <div class="list-group-item card-body text-black bg-info">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></p>
        </div>
    </div>
</div>
`
}

const createIntern = (intern) => {
    return `<div class="col-4 mt-4">
    <div span class="border border-dark"></span>
        <div class="card-header text-black bg-light">
            <h3>${intern.name}</h3>
            <h5><i class="fa-solid fa-graduation-cap"></i>Intern</h5>
        </div>
        <!-- Card 4 Info -->
        <div class="list-group-item card-body text-black bg-info">
            <p class="id">ID: ${intern.id}</p>
            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="school">School: ${intern.school}</p>
        </div>
    </div>
</div>`
}

// Function to generate Team Profile
generateTeamPro = (data) => {
    teamCards = [];
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const title = employee.teamTitle
    }
}








module.exports = generateTeamPro;