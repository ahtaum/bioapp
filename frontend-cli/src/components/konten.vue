<template>
    <div class="row my-3">
        <h1>Konten</h1>
        <div class="col">
            <div class="card border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                     <p class="card-text">{{ dataArtikel }}</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <input type="text" ref="nama">
                    <button class="btn btn-primary m-2" @click="handleClick">OK</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="card mb-5 border-0 shadow p-3 bg-body rounded">
                <div class="card-body">
                    <!-- Data Tabel dari App.vue -->
                    <slot name="data_Api">Data Tabel</slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    p {
        font-weight: bold;
    }
</style>

<script>
export default {
    data() {
        return {
            dataArtikel: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium animi fugiat illo alias veniam repellat assumenda, doloribus obcaecati id. Modi, nisi ut? Non recusandae fuga vitae nam ducimus, quod voluptatem!`
        }
    },
    methods: {
        handleClick() {
            console.log(this.$refs.nama)
            this.$refs.nama.classList.add('active')
            this.$refs.nama.focus()
        }
    }
}
</script>
