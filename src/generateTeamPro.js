// Functions to generate html Team Profile
const generateManager = function (manager) {
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

const generateEngineer = function (engineer) {
    return `<div class="col-3 mt-4">
    <div span class="border border-dark"></span>
        <div class="card-header text-black bg-light">
            <h3>${engineer.name}</h3>
            <h5><i class="fa-solid fa-user-astronaut"></i>Engineer</h5>
        </div>
        <!-- Card 2 Info -->
        <div class="list-group-item card-body text-black bg-info">
            <p class="id">ID: ${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">GitHub: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></p>
        </div>
    </div>
</div>
`
}

const generateIntern = function (intern) {
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

generateTeamPro = (data) => {
    teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            teamArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            teamArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            teamArray.push(internCard);
        }
        
    }

    const teamInfo = teamArray.join('')

    const generateTeam = generateTeamPage(teamInfo); 
    return generateTeam;

}

const generateTeamPage = function (teamInfo){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" integrity="sha384-ejwKkLla8gPP8t2u0eQyL0Q/4ItcnyveF505U0NIobD/SMsNyXrLti6CWaD0L52l" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <!-- My Team Header -->
        <header>
            <div class="jumbotron jumbotron-fluid p-3 mb-2 bg-transparent text-grey text-center">
                <div class="container">
                  <h1 class="display-4">My Team</h1>
                  <figure class="text-center">
                    <blockquote class="blockquote">
                      <p>"Teamwork Makes The Dream Work."</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                       <cite title="Source Title">John C. Maxwell</cite>
                    </figcaption>
                  </figure>
                </div>
              </div>
    
        </header>
              <main>
                  <div class="continaer">
                      <div class="row justify-content-center">
                        ${teamInfo}
                      </div>
                  </div>
              </main>
     
    
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    
    </body>
    </html>`
}








module.exports = generateTeamPro;