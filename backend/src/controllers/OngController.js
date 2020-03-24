const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return res.json({ id })
    },

    index(req, res) {
        return connection('ongs').select('*')
            .then(ongs => res.json(ongs))
    }
}