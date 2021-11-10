<template>

<!-- navbar -->
<navigasi-atas />

<!-- modal -->
<teleport to="#modals" v-if="showmodal">
  <modalbuatan tes="Besar Sekali" :moto="motoku" theme="blue" @tutup="toggleModal">
    <template v-slot:kata_mutiara>
      <p class="card-text">Bersekutu Tambah Mutu</p>
    </template>
  </modalbuatan>
</teleport>

  <div class="container">
  <button class="btn btn-primary" type="button" @click="toggleModal">Detail</button>

<!-- halaman KOnten -->
    <konten>
      <template v-slot:data_Api>
        <!-- data Api -->
        <table class="table">
          <thead>
              <tr>
                  <th scope="col">Nama</th>
                  <th scope="col">Jenis Kelamin</th>
                  <th scope="col">Status</th>
                  <th scope="col">Kepribadian</th>
                  <th scope="col">Tentang</th>
                  <th scope="col">Motto</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="hasil in dataApi" :key="hasil.id">
                  <td>{{ hasil.nama }}</td>
                  <td>{{ hasil.jenis_kelamin }}</td>
                  <td>{{ hasil.menikah }}</td>
                  <td>{{ hasil.kepribadian }}</td>
                  <td>{{ hasil.tentang }}</td>
                  <td>{{ hasil.motto }}</td>
              </tr>
          </tbody>
        </table>
      </template>
    </konten>

    <formdata />

  </div>
</template>

<script>
import navigasiAtas from './components/navigasi.vue'
import konten from './components/konten.vue'
import modalbuatan from './components/modal.vue'
import formdata from './components/formdata.vue'

import axios from 'axios'

let waktu = new Date();

export default {
  name: 'App',
  components: { navigasiAtas, konten, modalbuatan, formdata },
  data() {
    return {
      motoku: `${waktu.getHours()} : ${waktu.getMinutes()} : ${waktu.getSeconds()}`,
      showmodal: false,
      dataApi: this.getData()
    }
  },
  methods: {
    toggleModal() {
      this.showmodal = !this.showmodal
    },
    getData() {
      axios.get(`http://localhost:5000/api/v1`).then(res => {
          this.dataApi = res.data
      })
    }
  }
}
</script>

<style>
#app {
  /* font-family: monospace; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
