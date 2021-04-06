//Creates a function to create markdown for README
const createHTML = () => 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/69600a8117.js" crossorigin="anonymous"></script>
    
    <title>Team Profile Generator</title>
</head>
<body>
    <header>
        <h1>The Team Board</h1>
    </header>
    <main class ="container">
        <row class="row">
            <div class="col-12 d-flex justify-content-center">
`

const createManager = (data) =>
`
                <div class = "card m-2 col-3">
                    <div class= "card-body">
                        <h3 class="card-title">${data.name}</h3>
                        <h5><i class="fas fa-mug-hot"></i> Manager</h5>
                    </div>
                    <p>
                        <ul class ="list.group list-group-flush">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: ${data.email}</li>
                            <li class="list-group-item">Phone: ${data.phone}</li>
                        </ul>
                    <p>
                </div>
`

const createEngineer =(data) =>
`
                <div class = "card m-2 col-3">
                    <div class= "card-body">
                        <h3 class="card-title">${data.name}</h3>
                        <h5><i class="fas fa-glasses"></i> Engineer</h5>
                    </div>
                    <p>
                        <ul class ="list.group list-group-flush">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: ${data.email}</li>
                            <li class="list-group-item">GitHub: [${data.github}](https://www.github/${data.github})</li>
                        </ul>
                    </p>
                </div>
`

const createIntern =(data) => 
`
                <div class = "card m-2 col-3">
                    <div class= "card-body">
                        <h3 class="card-title">${data.name}</h3>
                        <h5><i class="fas fa-user-graduate"></i> Intern</h5>
                    </div>
                    <p>
                        <ul class ="list.group list-group-flush">
                            <li class="list-group-item">ID: ${data.id}</li>
                            <li class="list-group-item">Email: ${data.email}</li>
                            <li class="list-group-item">School: ${data.school}</li>
                        </ul>
                    </p>
                </div>
`

const endHTML = () =>
`    
            </div>
        </row>
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

