const express = require('express')
const app = express()
const User = require('./models/User')

app.use(express.json())

app.get('/', async (req, res) => {
  res.send('Uma pagina nova sendo renderizada')
})

app.post('/login', async (req, res) => {
  console.log(req.body)
  await User.create(req.body)
    .then(() => {
      return res.json({
        erro: false,
        mensagem: 'Dados enviados com sucesso para o banco de dados!'
      })
    })
    .catch(() => {
      // return for request
      return res.status(400).json({
        erro: true,
        mensagem: 'Erro: dados não foram cadastrados com sucesso.'
      })
    })
  // possibility: pull in an axios on the front
})

app.listen(8080, () => {
  console.log('listening on port 8080 in http://localhost:8080')
})
