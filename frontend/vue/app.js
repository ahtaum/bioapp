const app = Vue.createApp({
    data() {
        return {
            x: 0,
            y: 0,
            judul: `Hallo Tuan Herlambang`,
            dataApi: this.viewData()
        }
    },
    methods: {
        rgb(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        viewData() {
            fetch(`http://localhost:5000/api/v1`).then(res => res.json())
            .then(data => this.dataApi = data)
            .catch(err => console.warn(err))
        }
    }
});

app.mount('#app')