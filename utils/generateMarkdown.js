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
    <main>
`

const endHTML = () =>
`    
    </main>
</body>
</html>`

module.exports = {
    createHTML,
    endHTML,
}