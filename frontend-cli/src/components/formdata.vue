<template>
    <div class="card my-3">
        <div class="card-body">
            <form method="post" v-on:submit.prevent="submitForm">
                <div class="mb-3">
                    <label for="nama" class="form-label">Nama</label>
                    <input type="text" class="form-control" v-model="form.nama" placeholder="masukan Nama" />
                </div>
                <div class="mb-3">
                    <label for="tentang" class="form-label">Tentang</label>
                    <input type="text" class="form-control" v-model="form.tentang" placeholder="tentang" />
                </div>
                <div class="mb-3">
                    <label for="motto" class="form-label">Motto</label>
                    <input type="text" class="form-control" v-model="form.motto" placeholder="motto" />
                </div>
                <div class="mb-3">
                    <label for="jenis_kelamin" class="form-label">Jenis Kelamin</label>
                    <select class="form-select" name="jenis_kelamin" v-model="form.jenis_kelamin">
                        <option>Pilih</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="kepribadian" class="form-label">Kepribadian</label>
                    <select class="form-select" name="kepribadian" v-model="form.kepribadian">
                        <option>Pilih</option>
                        <option value="introvet">Introvet</option>
                        <option value="extrovet">Extrovet</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="menikah" class="form-label">Status Menikah</label>
                    <select class="form-select" name="menikah" v-model="form.menikah">
                        <option>Pilih</option>
                        <option value="true">Menikah</option>
                        <option value="false">Belum menikah</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            form: {
                nama: '',
                tentang: '',
                motto: '',
                jenis_kelamin: [],
                kepribadian: [],
                menikah: []
            }
        }
    },
    methods: {
        submitForm(event) {
            axios.post('http://localhost:5000/api/v1', this.form).then((res) => {
                console.log(`HOREE BERHASIL YEYEYEYEYE`)
                event.target.reset()
            }).catch((err) => {
                console.log(err)
                event.target.reset()
            });
        }
    }
}
</script>
