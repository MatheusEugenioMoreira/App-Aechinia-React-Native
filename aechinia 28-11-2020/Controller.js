const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let user = models.User;
let reportar = models.Reportar;

app.post('/login', async (req, res) => {
    let response = await user.findOne({
        where: { name: req.body.name, password: req.body.password }
    });
    if (response === null) {
        res.send(JSON.stringify('error'));
    } else {
        res.send(response);
    }
});

//criação da crise no banco

app.post('/create', async (req, res) => {
    await reportar.create({
        usuario_id: req.body.usuario_id,
        sintomas: req.body.sintomas,
        observacoes: req.body.observacoes
    }).then((response)=>{
        reportarId+=response.id
    });
    
})

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Servidor Rodando');
});