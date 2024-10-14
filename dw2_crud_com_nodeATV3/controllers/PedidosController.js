import express from "express"
const router = express.Router()
import Pedido from "../models/Pedido.js"

// ROTA PEDIDOS
router.get("/pedidos", (req, res) => {
    Pedido.findAll().then(pedidos => {
        res.render("pedidos", {
            pedidos : pedidos
        })
    })
})

router.post("/pedidos/new", (req, res) => {
    const numero = req.body.numero
    const valor = req.body.valor
    const tipo = req.body.tipo
    Pedido.create({
        numero : numero,
        valor : valor,
        tipo : tipo
    }).then(() => {
        res.redirect("/pedidos")
    }).catch(erro => {
        console.log(erro)
    })
})


router.get("/pedidos/delete/:id", (req, res) => {
    const id = req.params.id
    Pedido.destroy({
        where: {
            id : id
        }
    }).then(() => {
        res.redirect("/pedidos")
    }).catch(erro => {
        console.log(erro)
    })
})



router.get("/pedidos/edit/:id", (req, res) => {
    const id = req.params.id
    Pedido.findByPk(id).then(pedido  => {
        res.render("pedidoEdit", {
            pedido : pedido
    })
    })
})

router.post("/pedidos/update/:id", (req, res) => {
    const id = req.body.id
    const numero = req.body.numero
    const valor = req.body.valor
    const tipo = req.body.tipo
    Pedido.update(
        {
            numero : numero,
            valor : valor,
            tipo : tipo
        },
        {where: {id : id}}
    ).then(() => {
        res.redirect("/pedidos")
    })
})


// EXPORTANDO O MÓDULO DE ROTAS
export default router