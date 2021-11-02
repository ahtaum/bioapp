const { bio } = require('../models/pintu');
const db = require('../models/pintu')
const dataBio = db.bio

exports.cariSemua = (req, res) => {
    dataBio.find().then((hasil) => {
        res.send(hasil)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || `Error saat menampilkan semua data`
        })
    });
}

exports.cariDariId = (req, res) => {
    dataBio.findById(req.params.id).then((hasil) => {
        if (!hasil) {
            res.status(404).send({ message: `Data tydak ditemukan` })
        }
        res.send(hasil)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || `ada yang error saat mencari data`
        })
    })
}

exports.tambah = (req, res) => {
    let data = new bio({
        nama: req.body.nama,
        tentang: req.body.tentang,
        motto: req.body.motto,
        jenis_kelamin: req.body.jenis_kelamin,
        kepribadian: req.body.kepribadian,
        menikah: req.body.menikah ? req.body.menikah : false
    })
    dataBio.create(data).then((hasil) => {
        res.send(hasil)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || `Error saat menambahkan data`
        })
    });
}

exports.ubah = (req, res) => {
    dataBio.findByIdAndUpdate(req.params.id, req.body).then((hasil) => {
        if (!hasil) {
            res.status(404).send({ message: `Data tidak ditemukan` })
        }
        res.send({ message: `Data Berhasil di ubah` })
    }).catch((err) => {
        res.status(409).send({ message: err.message || `ada yang error saat mengubah data` })
    });
}

exports.hapus = (req, res) => {
    dataBio.findByIdAndRemove(req.params.id).then((hasil) => {
        if (!hasil) {
            res.status(404).send({ message: `data tidak ditemukan` })
        }
        res.send({ message: `Data berhasil dihapus` })
    }).catch((err) => {
        res.status(409).send({
            message: err.message || `ada yang error saat menghapus data`
        })
    })
}