module.exports = (aplikasi) => {
    const bio = require('../controllers/bio.controller')
    const router = require('express').Router()

    router.get('/', bio.cariSemua)
    router.get('/:id', bio.cariDariId)
    router.post('/', bio.tambah)
    router.put('/:id', bio.ubah)
    router.delete('/:id', bio.hapus)

    aplikasi.use('/api/v1', router)
}