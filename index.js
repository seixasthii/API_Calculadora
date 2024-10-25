const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//ativar CORS
app.use(cors());

//Rota para somar os números
app.get('/api/somar',(req,res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);
    const soma = numero1 + numero2;
    res.json({soma});
});

app.get('/api/sube',(req,res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);
    const sub = numero1 - numero2;
    res.json({sub});
});

app.get('/api/divi',(req,res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);
    const div = numero1 / numero2;
    res.json({div});
});

app.get('/api/mu',(req,res) => {
    const numero1 = parseFloat(req.query.numero1);
    const numero2 = parseFloat(req.query.numero2);
    const mult = numero1 * numero2;
    res.json({mult});
});



//Iniciar o servidor
app.listen(port,() =>{
    console.log(`Servidor rodando em http://localhost:${port}`);

});