//Creates a function to create markdown for README
const createHTML = () => 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     
    <title>My Team</title>
    <style>
        
    </style>
</head>
<body>
    <header>
        <h1>My team</h1>
    </header>
    <main class ="container">
        <div class="row">
`

const createManager = (data) =>
`
<card class = "card m-2 col-3>
    <div class= "card-body>
        <h5="card-title>${data.name}
        <i class="fas fa-mug-hot"></i>Manager</h5>
    </div>
    <ul class ="list.group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">Phone: ${data.phone}</li>
    </ul>
</card>
`

const createEngineer =(data) =>
`
<card class = "card m-2 col-3>
    <div class= "card-body>
        <h5="card-title>${data.name}
        <i class="fas fa-glasses"></i>Engineer</h5>
    </div>
    <ul class ="list.group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">GitHub: [${data.github}](https://www.github/${data.github})</li>
    </ul>
</card>
`

const createIntern =(data) => 
`
<card class = "card m-2 col-3>
    <div class= "card-body>
        <h5="card-title>${data.name}
        <i class="fas fa-user-graduate"></i>Intern</h5>
    </div>
    <ul class ="list.group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: ${data.email}</li>
        <li class="list-group-item">School: ${data.school}</li>
    </ul>
</card>
`

const endHTML = () =>
`    
    </main>
</body>
</html>`

module.exports = {
    createHTML,
    endHTML,
    createManager,
    createEngineer,
    createIntern,
}

