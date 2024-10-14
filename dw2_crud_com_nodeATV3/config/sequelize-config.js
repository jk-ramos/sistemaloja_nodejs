//Importando o sequelize
import Sequelize from "sequelize"

//Criando dados de conexão com o banco
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'loja',
    timezone: "-03:00"
})
export default connection