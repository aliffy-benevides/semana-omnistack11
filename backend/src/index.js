const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

//#region Notes
/**
 * Query Params (query): parâmetros nomeadors de url (?)
 * Route Params (params): parâmetros de rota
 * Request Body (body): Corpo da requisição
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver (pacote oficial do banco de dados): SELECT * FROM users
 * Query Builder (sdk do banco): table('users').select(['name', 'age'])
 */
//#endregion

app.listen(3333)
