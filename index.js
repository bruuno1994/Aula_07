const express = require("express")

const app = express()

app.use(express.json())

app.listen(8080, () => {
    console.log("Olá terráqueo! Sua porta 8080 está aberta");
})

app.post('/includeAluno', (req, res) => {
    const { nome } = req.body

    res.send(`<h1> Olá ${nome}, bem vindo!`)
})