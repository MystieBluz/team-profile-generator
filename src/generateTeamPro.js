// Function to generate html Team Profile
const generateTeamPro = (data) => {
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
                  <p class="lead">"Teamwork Makes The Dream Work."
                      -John C. Maxwell </p>
                </div>
              </div>
        </header>
            
    
              <!-- Cards Section -->
              <main>
                  <div class="continaer">
                      <div class="row justify-content-center">
                          <!-- Manager Card 1 Header -->
                        <div class="col-3 mt-4">
                            <div span class="border border-dark"></span>
                                <div class="card-header text-black bg-light" >
                                    <h3>${data.name}</h3>
                                    <h5><i class="fa-solid fa-user-ninja"></i>${data.title}</h5>
                                </div>
                                <!-- Card 1 Info -->
                                <div class="list-group-item card-body text-black bg-info">
                                    <p class="id">${data.id}: </p>
                                    <p class="email">Email: <a href="mailto:misty.duhart@gmail.com">${data.email}</a></p>
                                    <p class="officeNumber">${data.officeNumber}: </p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Engineer Card 2 Header -->
                        <div class="col-3 mt-4">
                            <div span class="border border-dark"></span>
                                <div class="card-header text-black bg-light">
                                    <h3>${data.name}</h3>
                                    <h5><i class="fa-solid fa-user-astronaut"></i>${data.title}</h5>
                                </div>
                                <!-- Card 2 Info -->
                                <div class="list-group-item card-body text-black bg-info">
                                    <p class="id">${data.id}: </p>
                                    <p class="email">Email: <a href="mailto:misty.duhart@gmail.com">${data.email}</a></p>
                                    <p class="github">GitHub: <a href="https://github.com/mduhart82" target="blank">${data.github}</a></p>
                                </div>
                            </div>
                        </div>
    
                        <!-- Engineer Card 3 Header -->
                        <div class="col-3 mt-4">
                            <div span class="border border-dark"></span>
                                <div class="card-header text-black bg-light">
                                    <h3>${data.name}</h3>
                                    <h5><i class="fa-solid fa-user-astronaut"></i>${data.title}</h5>
                                </div>
                                <!-- Card 3 Info -->
                                <div class="list-group-item card-body text-black bg-info">
                                    <p class="id">${data.id}: </p>
                                    <p class="email">Email: <a href="mailto:misty.duhart@gmail.com">${data.email}</a></p>
                                    <p class="github">GitHub: <a href="https://github.com/mduhart82" target="blank">${data.github}</a></p>
                                </div>
                            </div>
                        </div>
    
                        <!-- Intern Card 4 Header -->
                        <div class="col-4 mt-4">
                            <div span class="border border-dark"></span>
                                <div class="card-header text-black bg-light">
                                    <h3>${data.name}</h3>
                                    <h5><i class="fa-solid fa-graduation-cap"></i>${data.title}</h5>
                                </div>
                                <!-- Card 4 Info -->
                                <div class="list-group-item card-body text-black bg-info">
                                    <p class="id">${data.id}: </p>
                                    <p class="email">Email: <a href="mailto:misty.duhart@gmail.com">${data.email}</a></p>
                                    <p class="school">${data.school}: </p>
                                </div>
                            </div>
                        </div>
                        <!-- Intern Card 5 Header -->
                        <div class="col-4 mt-4">
                            <div span class="border border-dark"></span>
                                <div class="card-header text-black bg-light">
                                    <h3>${data.name}</h3>
                                    <h5><i class="fa-solid fa-graduation-cap"></i>${data.title}</h5>
                                </div>
                                <!-- Card 5 Info -->
                                <div class="list-group-item card-body text-black bg-info">
                                    <p class="id">${data.id}: </p>
                                    <p class="email">Email: <a href="mailto:misty.duhart@gmail.com">${data.email}</a></p>
                                    <p class="school">${data.school}: </p>
                                </div>
                            </div>
                        </div>
    
                      </div>
                  </div>
              </main>
    </body>
    </html>`
};


module.exports = generateTeamPro;