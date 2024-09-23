const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.render('index')
})

app.get("/clientes", (req, res) => {
    let clientes = [
        { foto: "", nome: "Jaquelaine Ramos", cpf: "494.054.459.01", endereco: "Eldorado" },
        { foto: "", nome: "Juliano Rodrigues", cpf: "123.456.789-10", endereco: "Registro" },
        { foto: "", nome: "Thiago Funaki", cpf: "587.654.321-92", endereco: "São Paulo" },
        { foto: "", nome: "Maria Eduarda", cpf: "967.890.123-45", endereco: "Jacupiranga" },
        { foto: "", nome: "Valéria Silva", cpf: "146.135.789-13", endereco: "Cajati" },
        { foto: "", nome: "Bruno Lopes", cpf: "289.321.654-87", endereco: "Iguape" },
        { foto: "", nome: "Matheus Mosken", cpf: "835.792.468-07", endereco: "Cananéia" },
        { foto: "", nome: "Caio Bronescheki", cpf: "352.963.741-24", endereco: "Sete Barras" },
        { foto: "", nome: "Elias Alves", cpf: "469.258.147-36", endereco: "Miracatu" },
        { foto: "", nome: "Vinicius Arai", cpf: "747.258.369-09", endereco: "Iporanga" }
    ];
    res.render('clientes', {
        clientes: clientes
    })
})


app.get("/produtos", (req, res) => {
    let produtop = req.params.produto
    let produtos = [
            {foto: "img/celular.png", nome: 'Celular', preco: 1999.00, categoria: 'Eletrônicos' },
            {foto: "img/notebook.png", nome: 'Notebook Gamer', preco: 5830, categoria: 'Eletrônicos' },
            {foto: "img/tv.png", nome: 'Televisao Smart', preco: 2775, categoria: 'Eletrônicos' },
            {foto: "img/computador.jpg", nome: 'Computador Gamer', preco: 15980, categoria: 'Eletrônicos' },
            {foto: "img/console.png", nome: 'Console de videogame', preco: 170, categoria: 'Eletrônicos' },
            {foto: "img/smartwatch.png", nome: 'Smartwatch', preco: 390, categoria: 'Eletrônicos' },
            {foto: "img/tablet.png", nome: 'Tablet', preco: 1250, categoria: 'Eletrônicos' },
            {foto: "img/impressora.png", nome: 'Impressora Laser', preco: 800, categoria: 'Eletrônicos' },
            {foto: "img/fone.webp", nome: 'Fone sem fio', preco: 55, categoria: 'Eletrônicos' }
    ];
    res.render('produtos', {
        produto: produtop,
        produtos: produtos
    })
})


app.get("/pedidos", (req, res) => {
    let pedidos = [
        { foto: "", numero: "1349686", valor: 1999 },
        { foto: "", numero: "4568812", valor: 5830 },
        { foto: "", numero: "5677923", valor: 2775 },
        { foto: "", numero: "6786015", valor: 15980 },
        { foto: "", numero: "7895197", valor: 170 },
        { foto: "", numero: "8904239", valor: 390 },
        { foto: "", numero: "9013352", valor: 1250 },
        { foto: "", numero: "1232538", valor: 800 },
        { foto: "", numero: "2341620", valor: 55 }
    ];
    res.render('pedidos', {
        pedido: pedidos
    });
});




app.listen(8080, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }

})