import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

const Pedido = connection.define
('Pedido', {
    numero: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Pedido.sync({ force: false });

export default Pedido;
