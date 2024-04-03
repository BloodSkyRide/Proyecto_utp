import {Sequelize} from 'sequelize';

const db = new Sequelize('proyecto_utp', 'root', '', {

        host: 'localhost',
        dialect: 'mysql',
});

export default db