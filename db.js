const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    'telega_bot', // app name
    'root', // admin name
    'root', // admin password
    {
        host: '', //your host
        port: '', // your port
        dialect: 'postgres'
    }
)