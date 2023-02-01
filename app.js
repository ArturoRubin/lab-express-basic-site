const express = require("express")

const app = express()

app.use(express.static('public'))

app.get("/", (req, res)=>{
    console.log("HomePage", req)
    res.send("<h1>Bienvenido a mi pagina</h1>")
})

app.listen(3000, ()=>{
    console.log("aplicacion lista en puerto")
})

//Nuestra primer ruta
app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home-page.html'))

//Nuestra segunda ruta
app.get('/AboutSly', (request, response, next) => response.sendFile(__dirname + '/views/about-page.html'))

//Nuestra tercera ruta
app.get('/SlyWork', (request, response, next) => response.sendFile(__dirname + '/views/works-page.html'))

