const express = require('express')
const db = require('./app/models/pintu')
const cors = require('cors')
const axios = require('axios')
const aplikasi = express()

const corsOption = {
    origin: '*',
    Credential: true,
    optionSuccessStatus: 200
}

aplikasi.use(cors(corsOption))
aplikasi.use(express.json())
aplikasi.use(express.urlencoded({ extended: true }))

// tampilkan respon
aplikasi.get('/', (req,res) => {
    res.json({
        pesan: `Hallo Pecundang`
    })
});

// sambungin ke ROUTER
require('./app/routes/bio.routes')(aplikasi)

// konek ke database
db.mongoose.connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(() => {
        console.log(`Database Terhubung!`)
}).catch((err) => {
            console.log(`gagal terhubung ke Database ${err}!!!`)
            process.exit() // glo gagal hentikan proses
});

aplikasi.listen(5000, () => {
    try {
        console.log(`Berjalan di http://localhost:5000`)
    } catch (e) {
        console.error(e)
    }
})