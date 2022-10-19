"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node-typescrip-rest', 'root', 'Gunter_$19', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
});
exports.default = db;
//# sourceMappingURL=conn.js.map