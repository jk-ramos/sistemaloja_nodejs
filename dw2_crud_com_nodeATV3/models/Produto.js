import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define
('Produto', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Produto.sync({ force: false });

export default Produto;
