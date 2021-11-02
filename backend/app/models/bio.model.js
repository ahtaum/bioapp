module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        nama: String,
        tentang: String,
        motto: String,
        jenis_kelamin: String,
        kepribadian: String,
        menikah: Boolean
    }, { timestamps: true });

    schema.method("toJSON", function(){
        const {__v, _id, ...Object} = this.toObject()
        Object.id = _id
        return Object
    })

    const bio = mongoose.model('bio', schema)
    return bio
}