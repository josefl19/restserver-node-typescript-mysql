import { Sequelize } from "sequelize";

const db = new Sequelize('node-typescrip-rest', 'root', 'Gunter_$19', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});

export default db;