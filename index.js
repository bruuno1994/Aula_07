const express = require("express")

const app = express()

app.use(express.json())

app.listen(8080, () => {
    console.log("Olá! O servidor está ativo na porta 8080");
    console.log(Alunos);
})

let Alunos = ['Maria', 'João', 'José']

app.post('/includeAluno', (request, response) => {
    const { nome } = request.body

    Alunos.push(nome)

    response.send(`<h1> Olá ${nome}, você foi inserido no Banco de Dados.`)
})

app.get('/getAluno', (request, response) => {
    const { index } = request.body
    // Connect SQL = SELECT * FROM Alunos WHERE id = index
    response.send(`<h1> O aluno ${Alunos[index]} foi encontrado! </h1>`)
})

app.get('/getAlunos', (request, response) => {
    response.send(`Todos os alunos cadastrados são: ${Alunos}`)
})

app.put('/updateAluno', (request, response) => {
    const { index, nome } = request.body
    Alunos[index] = nome
    response.send('<h1> O nome foi atualizado com sucesso! </h1>');
    console.log(Alunos);
})

app.delete('/deleteAluno', (request, response) => {
    const { index } = request.body
    Alunos.splice(index, 1)
    response.send(`<h1>Alunos após o DELETE: ${Alunos}`)
    console.log(Alunos);
})