const express = require("express")

const app = express()

app.use(express.json())

app.listen(8080, () => {
    console.log("Olá! Sua porta 8080 está aberta");
})

app.post('/includeAluno', (req, res) => {
    const { nome } = req.body
    const { idade } = req.body

    res.send(`<h1> Olá ${nome}, seja bem vindo à sua primeira API! Você tem ${idade} anos de idade.`)
})