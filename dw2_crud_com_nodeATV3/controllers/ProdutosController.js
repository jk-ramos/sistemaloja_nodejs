import express from "express"
const router = express.Router()
import Produto from "../models/Produto.js"

// ROTA PRODUTOS
router.get("/produtos", (req, res) => {
    Produto.findAll().then(produtos => {
        res.render("produtos", {
            produtos : produtos
        })
    })
})


// ROTA DE CADASTRAR DE PRODUTO
router.post("/produtos/new", (req, res) => {
    const nome = req.body.nome
    const valor = req.body.valor
    const categoria = req.body.categoria
    Produto.create({
        nome : nome,
        valor : valor,
        categoria : categoria
    }).then(() => {
        res.redirect("/produtos")
    }).catch(erro => {
        console.log(erro)
    })
})


router.get("/produtos/delete/:id", (req, res) => {
    const id = req.params.id
    Produto.destroy({
        where: {
            id : id
        }
        }).then(() => {
            res.redirect("/produtos")
        }).catch(erro => {
            console.log(erro)
        })
    })


router.get("/produtos/edit/:id", (req, res) => {
        const id = req.params.id
        Produto.findByPk(id).then(produto  => {
            res.render("produtoEdit", {
                produto : produto
            })
        })
    })
    

router.post("/produtos/update/:id", (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    const valor = req.body.valor
    const categoria = req.body.categoria
    Produto.update(
        {

        nome : nome,
        valor : valor,
        categoria : categoria

        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/produtos")
    })
})

// EXPORTANDO O MÓDULO DE ROTAS
export default router
