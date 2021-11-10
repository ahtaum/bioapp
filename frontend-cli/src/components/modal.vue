<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modalbuatan text-center" :class="{ blue: theme === 'blue' }">
            <h1>Modal Title</h1>
            <p>Modal Konten</p>
            <p>{{ tes }}</p>
            <p>{{ moto }}</p>
            <div class="container">
                <slot name="kata_mutiara"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['tes', 'moto', 'theme'],
  methods: {
      closeModal() {
          this.$emit('tutup')
      }
  }
}
</script>


<style scoped>
    .modalbuatan {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .modalbuatan h1 {
        color: rgb(35, 209, 209);
        border: none;
        padding: 0;
    }

    .blue {
        background: rgb(46, 46, 204);
        color: white;
    }
</style>